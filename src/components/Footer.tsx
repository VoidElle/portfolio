import React from 'react';
import { useLang } from '../context/LangContext';

const Footer: React.FC = () => {
    const { t } = useLang();

    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Luca Del Corona. {t('footer.rights')}
            </p>
        </div>
    );
};

export default Footer;
