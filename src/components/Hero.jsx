import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-secondary font-semibold text-lg mb-4 block">
                        Hello, I'm
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                        {portfolioData.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-8">
                        {portfolioData.role}
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                        {portfolioData.about.split('.')[0]}. {portfolioData.about.split('.')[1]}.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-primary hover:bg-sky-600 text-white font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/25"
                    >
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary font-semibold transition-all"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
