export const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

const moving = new Set<HeightMotion>();
const easing = 'cubic-bezier(0.4, 0, 0.2, 1)';

export class HeightMotion {
  private animation?: Animation;
  private completion?: Promise<void>;
  private resolve?: () => void;
  private from = 0;
  private to = 0;
  private target = 0;

  constructor(
    private element: HTMLElement,
    private measure: () => number,
    private settle: () => void = () => {},
  ) {}

  get running() {
    return !!this.animation;
  }

  get finished() {
    return this.completion ?? Promise.resolve();
  }

  run(animate = true) {
    const target = this.measure();
    const current = this.element.getBoundingClientRect().height;
    const canAnimate = animate && !reducedMotion.matches && !document.hidden;

    this.completion ??= new Promise<void>((resolve) => { this.resolve = resolve; });
    const completion = this.completion;
    this.target = target;

    if (!canAnimate || Math.abs(current - target) < 0.5) {
      this.finish();
      return completion;
    }

    if (this.animation) {
      const reverseTarget = this.animation.playbackRate > 0 ? this.from : this.to;
      if (Math.abs(target - reverseTarget) < 0.5) {
        this.animation.reverse();
        return completion;
      }
    }

    this.element.style.height = `${current}px`;
    this.animation?.cancel();
    this.from = current;
    this.to = target;
    this.element.classList.add('is-height-animating');
    moving.add(this);
    document.documentElement.classList.add('is-changing-height');

    const animation = this.element.animate(
      { height: [`${current}px`, `${target}px`] },
      { duration: 320, easing, fill: 'both' },
    );
    this.animation = animation;
    animation.onfinish = () => {
      if (this.animation === animation) this.finish();
    };
    return completion;
  }

  refresh() {
    if (this.animation && Math.abs(this.measure() - this.target) >= 0.5) this.run();
  }

  finish() {
    this.settle();
    this.element.style.removeProperty('height');
    this.animation?.cancel();
    this.animation = undefined;
    this.element.classList.remove('is-height-animating');
    moving.delete(this);
    document.documentElement.classList.toggle('is-changing-height', moving.size > 0);
    const resolve = this.resolve;
    this.completion = undefined;
    this.resolve = undefined;
    resolve?.();
  }
}

export class Disclosure {
  readonly summary: HTMLElement;
  readonly content: HTMLElement;
  private body: HTMLElement;
  private motion: HeightMotion;
  private expanded: boolean;

  constructor(readonly element: HTMLDetailsElement, request?: () => void) {
    this.summary = element.querySelector<HTMLElement>(':scope > summary')!;
    this.content = element.querySelector<HTMLElement>(':scope > [data-disclosure-content]')!;
    this.body = this.content.firstElementChild as HTMLElement;
    this.expanded = element.open;
    this.motion = new HeightMotion(
      this.content,
      () => this.expanded ? this.body.getBoundingClientRect().height : 0,
      () => { element.open = this.expanded; },
    );
    this.sync();
    this.summary.addEventListener('click', (event) => {
      event.preventDefault();
      if (request) request();
      else void this.setExpanded(!this.expanded);
    });
    element.addEventListener('toggle', () => {
      if (!this.motion.running && element.open !== this.expanded) {
        this.expanded = element.open;
        this.sync();
      }
    });
    new ResizeObserver(() => this.motion.refresh()).observe(this.body);
  }

  get open() {
    return this.expanded;
  }

  setExpanded(expanded: boolean, animate = true) {
    if (expanded === this.expanded && (this.motion.running || this.element.open === expanded)) {
      if (!animate) this.motion.finish();
      return this.motion.finished;
    }
    if (!this.element.open && expanded) {
      this.content.style.height = '0px';
      this.element.open = true;
    }
    this.expanded = expanded;
    this.sync();
    return this.motion.run(animate);
  }

  private sync() {
    this.summary.setAttribute('aria-expanded', String(this.expanded));
    this.element.dataset.expanded = String(this.expanded);
    this.content.inert = !this.expanded;
  }
}

const finishMotion = () => {
  for (const motion of [...moving]) motion.finish();
};

reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) finishMotion();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) finishMotion();
});
