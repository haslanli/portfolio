import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:${PERSONAL_INFO.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="min-h-screen py-32 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Get in <span className="text-indigo-600 dark:text-indigo-500">Touch</span></h2>
             <p className="text-slate-600 dark:text-slate-400 text-lg font-light max-w-2xl mx-auto">Have a project in mind or want to discuss IoT security? I'm always open to new opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Connect Directly</h3>
            
            <div className="space-y-4">
              {[
                  { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Connect Profile', href: PERSONAL_INFO.linkedin },
                  { icon: Github, label: 'GitHub', value: 'View Code', href: PERSONAL_INFO.github },
                  { icon: Instagram, label: 'Instagram', value: 'Follow Me', href: PERSONAL_INFO.instagram },
              ].map((item, idx) => (
                <a 
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/50 hover:bg-white dark:hover:bg-white/10 transition-all group shadow-sm dark:shadow-none"
                >
                    <div className="p-3 bg-indigo-50 dark:bg-black/20 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                        <p className="text-slate-900 dark:text-white font-medium text-lg">{item.value}</p>
                    </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-black/40 transition-all placeholder-slate-400 dark:placeholder-slate-600"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-black/40 transition-all placeholder-slate-400 dark:placeholder-slate-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-black/40 transition-all placeholder-slate-400 dark:placeholder-slate-600"
                  placeholder="Collaboration Request"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-black/40 transition-all placeholder-slate-400 dark:placeholder-slate-600 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;