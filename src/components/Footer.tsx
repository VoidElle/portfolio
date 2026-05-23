import React from 'react';
import { useLang } from '../context/LangContext';

const Footer: React.FC = () => {
    const { t } = useLang();

    return (
        <footer className="py-6 border-t border-subtle mt-4">
            <p className="text-sm text-muted text-center">
                &copy; {new Date().getFullYear()} Luca Del Corona. {t('footer.rights')}
            </p>
        </footer>
    );
};

export default Footer;
