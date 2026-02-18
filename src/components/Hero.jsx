import React from 'react';
import { motion as Motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowRight } from 'lucide-react';
import { l10n, useI18n } from '../i18n.jsx';

const Hero = () => {
    const { lang, t } = useI18n();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl dark:bg-primary/15" />
                <div className="absolute -bottom-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-secondary/20 blur-3xl dark:bg-secondary/15" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(2,132,199,0.08)_1px,transparent_0)] [background-size:28px_28px] opacity-60 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.10)_1px,transparent_0)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-secondary font-semibold text-lg mb-4 block">
                        {t('hero.greeting')}
                    </span>
                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                        {portfolioData.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-8">
                        {l10n(portfolioData.role, lang)}
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                        {l10n(portfolioData.aboutShort, lang)}
                    </p>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-primary hover:bg-sky-600 text-white font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/25"
                    >
                        {t('hero.viewProjects')} <ArrowRight size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary font-semibold transition-all"
                    >
                        {t('hero.contactMe')}
                    </a>
                </Motion.div>
            </div>
        </section>
    );
};

export default Hero;
