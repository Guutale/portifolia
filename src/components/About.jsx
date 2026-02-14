import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
                            <div className="relative bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                                    {portfolioData.about}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border-l-4 border-primary pl-4">
                                        <h3 className="font-bold text-slate-900 dark:text-white">Full Stack</h3>
                                        <p className="text-sm text-slate-500">MERN Specialist</p>
                                    </div>
                                    <div className="border-l-4 border-secondary pl-4">
                                        <h3 className="font-bold text-slate-900 dark:text-white">Solutions</h3>
                                        <p className="text-sm text-slate-500">Enterprise Systems</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            Focus Areas
                        </h3>
                        <div className="space-y-4">
                            {['Management Systems', 'Payroll Systems', 'Delivery & Dispatch', 'AI-based Applications'].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
