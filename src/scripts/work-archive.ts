import { Disclosure, HeightMotion, reducedMotion } from './disclosure';

export function initializeWorkArchive(archive: HTMLElement) {
  const tabList = archive.querySelector<HTMLElement>('[data-tab-list]');
  const indicator = archive.querySelector<HTMLElement>('[data-tab-indicator]');
  const panelContainer = archive.querySelector<HTMLElement>('[data-panel-container]');
  const tabs = Array.from(archive.querySelectorAll<HTMLAnchorElement>('[data-tab]'));
  const panels = Array.from(archive.querySelectorAll<HTMLElement>('[data-panel]'));
  if (!tabList || !indicator || !panelContainer || !tabs.length || tabs.length !== panels.length) return;

  let activeIndex = 0;
  let requestedIndex = 0;
  let requestedEntry: Disclosure | null = null;
  let revision = 0;
  let entryAnimations: Animation[] = [];

  const entries = panels.flatMap((panel, index) =>
    Array.from(panel.querySelectorAll<HTMLDetailsElement>('.archive-entry')).map((element) => {
      const entry = new Disclosure(element, () => {
        const closing = requestedEntry === entry || (!requestedEntry && entry.open);
        void select(index, closing ? null : entry);
      });
      return entry;
    }),
  );
  const panelMotion = new HeightMotion(panelContainer, () => panels[activeIndex].getBoundingClientRect().height);

  const updateIndicator = () => {
    const bounds = tabs[activeIndex].getBoundingClientRect();
    indicator.style.width = `${bounds.width}px`;
    indicator.style.transform = `translateX(${bounds.left - tabList.getBoundingClientRect().left}px)`;
  };

  const finishEntries = () => {
    entryAnimations.forEach((animation) => animation.cancel());
    entryAnimations = [];
  };

  const renderPanel = (index: number, animate: boolean) => {
    const previousIndex = activeIndex;
    panelContainer.style.height = `${panelContainer.getBoundingClientRect().height}px`;
    finishEntries();
    activeIndex = index;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    updateIndicator();
    const completion = panelMotion.run(animate);
    if (animate && !reducedMotion.matches && !document.hidden) {
      const direction = index > previousIndex ? 1 : -1;
      entryAnimations = Array.from(
        panels[index].querySelectorAll<HTMLElement>('.archive__group-head, .archive-entry'),
        (entry) => entry.animate(
          [
            { opacity: 0, transform: `translateX(${direction * 8}px)` },
            { opacity: 1, transform: 'translateX(0)' },
          ],
          { duration: 240, easing: 'ease-out' },
        ),
      );
    }
    return completion;
  };

  async function select(index: number, entry: Disclosure | null, animate = true) {
    const request = ++revision;
    requestedIndex = index;
    requestedEntry = entry;
    await Promise.all(entries.filter((candidate) => candidate !== entry).map((candidate) => candidate.setExpanded(false, animate)));
    if (request !== revision) return;
    if (index !== activeIndex) await renderPanel(index, animate);
    else await panelMotion.finished;
    if (request !== revision) return;
    if (entry) await entry.setExpanded(true, animate);
  }

  const activate = (index: number) => {
    if (index !== requestedIndex) void select(index, null);
  };

  const showHashTarget = async () => {
    const target = document.getElementById(location.hash.slice(1));
    const index = panels.findIndex((panel) => panel === target || (target && panel.contains(target)));
    if (index < 0 || !target) return;
    const entry = entries.find((candidate) => candidate.element === target) ?? null;
    await select(index, entry, false);
    if (index === requestedIndex && entry === requestedEntry) target.scrollIntoView({ block: 'start', behavior: 'instant' });
  };

  tabList.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
    tab.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      activate(index);
    });
    tab.addEventListener('keydown', (event) => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else if (event.key !== ' ') return;
      event.preventDefault();
      activate(next);
      tabs[next].focus();
    });
  });

  renderPanel(0, false);
  archive.classList.add('archive--enhanced');
  void showHashTarget();
  window.addEventListener('hashchange', showHashTarget);

  const tabObserver = new ResizeObserver(updateIndicator);
  [tabList, ...tabs].forEach((element) => tabObserver.observe(element));
  const panelObserver = new ResizeObserver(() => panelMotion.refresh());
  panels.forEach((panel) => panelObserver.observe(panel));
  const stopEntryMotion = () => {
    finishEntries();
    indicator.getAnimations().forEach((animation) => animation.finish());
  };
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) stopEntryMotion();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopEntryMotion();
  });
}
