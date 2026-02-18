import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useI18n } from '../i18n.jsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const { lang, setLang, t } = useI18n();

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.skills'), href: '#skills' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Guutale<span className="text-slate-900 dark:text-white">.dev</span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                    {t('nav.language')}
                                </span>
                                <div className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-1">
                                    <button
                                        type="button"
                                        onClick={() => setLang('en')}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === 'en'
                                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                            }`}
                                        aria-pressed={lang === 'en'}
                                    >
                                        {t('lang.en')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setLang('so')}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === 'so'
                                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                            }`}
                                        aria-pressed={lang === 'so'}
                                    >
                                        {t('lang.so')}
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <div className="flex items-center space-x-4">
                            <div className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-1">
                                <button
                                    type="button"
                                    onClick={() => setLang('en')}
                                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === 'en'
                                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                    aria-pressed={lang === 'en'}
                                >
                                    {t('lang.en')}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setLang('so')}
                                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === 'so'
                                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                    aria-pressed={lang === 'so'}
                                >
                                    {t('lang.so')}
                                </button>
                            </div>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-primary focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
