import React from 'react';
import { motion as Motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { l10n, useI18n } from '../i18n.jsx';

const Skills = () => {
    const { lang, t } = useI18n();

    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {t('skills.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </Motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioData.skills.map((category, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700"
                        >
                            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                                {l10n(category.category, lang)}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors cursor-default"
                                    >
                                        <skill.icon size={16} />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
