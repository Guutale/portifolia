import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Mail, Github, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-12 shadow-2xl border border-slate-100 dark:border-slate-700"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities as a Full Stack Developer.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href={portfolioData.socialLinks.email}
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-sky-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25 group"
                        >
                            <Mail size={20} />
                            Say Hello
                            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href={portfolioData.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-semibold transition-all"
                        >
                            <Github size={20} />
                            {portfolioData.contact.github}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
