/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const I18nContext = createContext(null);

const STORAGE_KEY = 'portfolio_lang';
const DEFAULT_LANG = 'en';

const STRINGS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      greeting: "Hello, I'm",
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      fullStack: 'Full Stack',
      mernSpecialist: 'MERN Specialist',
      solutions: 'Solutions',
      enterpriseSystems: 'Enterprise Systems',
      focusTitle: 'Focus Areas',
      focusAreas: ['Management Systems', 'Payroll Systems', 'Delivery & Dispatch', 'AI-based Applications'],
    },
    skills: {
      title: 'Technical Skills',
    },
    projects: {
      title: 'Featured Projects',
      keyFeatures: 'Key Features',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
    },
    contact: {
      title: 'Get In Touch',
      body:
        "I'm currently looking for new opportunities as a Full Stack Developer. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      sayHello: 'Say Hello',
      whatsapp: 'WhatsApp',
    },
    footer: {
      tagline: 'Building scalable, enterprise-level systems.',
      rights: 'All rights reserved.',
    },
    lang: {
      en: 'ENG',
      so: 'Somali',
    },
  },
  so: {
    nav: {
      home: 'Bogga Hore',
      about: 'Aniga',
      skills: 'Xirfadaha',
      projects: 'Mashaariic',
      contact: 'Xiriir',
      language: 'Luqad',
    },
    hero: {
      greeting: 'Salaan, waxaan ahay',
      viewProjects: 'Daawo Mashaariicda',
      contactMe: 'Ila Soo Xiriir',
    },
    about: {
      title: 'Aniga',
      fullStack: 'Full Stack',
      mernSpecialist: 'Khabiir MERN',
      solutions: 'Xalal',
      enterpriseSystems: 'Nidaamyo Heer Shirkadeed',
      focusTitle: 'Meelaha aan Diirada Saaro',
      focusAreas: ['Nidaamyada Maareynta', 'Nidaamyada Mushaharka', 'Gaarsiin iyo Diris', 'Barnaamijyo ku salaysan AI'],
    },
    skills: {
      title: 'Xirfadaha Farsamada',
    },
    projects: {
      title: 'Mashaariic la Xushay',
      keyFeatures: 'Astaamaha Muhiimka ah',
      viewCode: 'Daawo Code-ka',
      liveDemo: 'Daawo Demo-ga',
    },
    contact: {
      title: 'Ila Soo Xiriir',
      body:
        'Hadda waxaan raadinayaa fursado cusub anigoo ah Full Stack Developer. Haddii aad qabto su\'aal ama aad rabto inaad salaanto, waan ku soo jawaabi doonaa sida ugu dhaqsaha badan!',
      sayHello: 'Salaan ii dir',
      whatsapp: 'WhatsApp',
    },
    footer: {
      tagline: 'Dhisaya nidaamyo la ballaadhin karo oo heer shirkadeed ah.',
      rights: 'Xuquuqda oo dhan way xafidan tahay.',
    },
    lang: {
      en: 'ENG',
      so: 'Somali',
    },
  },
};

function getPathValue(obj, path) {
  if (!path) return obj;
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function l10n(value, lang) {
  if (value == null) return value;
  if (typeof value === 'object' && !Array.isArray(value)) {
    const hasLangKeys = Object.prototype.hasOwnProperty.call(value, 'en') || Object.prototype.hasOwnProperty.call(value, 'so');
    if (hasLangKeys) return value[lang] ?? value.en ?? value.so;
  }
  return value;
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANG;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'so' || stored === 'en' ? stored : DEFAULT_LANG;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const t = (key) => {
      const v = getPathValue(STRINGS[lang], key);
      if (v !== undefined) return v;
      const fallback = getPathValue(STRINGS.en, key);
      return fallback !== undefined ? fallback : key;
    };

    return { lang, setLang, t };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}
