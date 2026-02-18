import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Github, Mail, Linkedin } from 'lucide-react';
import { useI18n } from '../i18n.jsx';

const Footer = () => {
    const { t } = useI18n();

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h3 className="font-display text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Guutale<span className="text-slate-900 dark:text-white">.dev</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={portfolioData.socialLinks.email} className="text-slate-500 hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} {portfolioData.name}. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
