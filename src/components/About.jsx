import React from 'react';
import { motion as Motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { l10n, useI18n } from '../i18n.jsx';

const About = () => {
    const { lang, t } = useI18n();

    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {t('about.title')}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </Motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <Motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
                            <div className="relative bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                                    {l10n(portfolioData.about, lang)}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border-l-4 border-primary pl-4">
                                        <h3 className="font-bold text-slate-900 dark:text-white">{t('about.fullStack')}</h3>
                                        <p className="text-sm text-slate-500">{t('about.mernSpecialist')}</p>
                                    </div>
                                    <div className="border-l-4 border-secondary pl-4">
                                        <h3 className="font-bold text-slate-900 dark:text-white">{t('about.solutions')}</h3>
                                        <p className="text-sm text-slate-500">{t('about.enterpriseSystems')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            {t('about.focusTitle')}
                        </h3>
                        <div className="space-y-4">
                            {t('about.focusAreas').map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
