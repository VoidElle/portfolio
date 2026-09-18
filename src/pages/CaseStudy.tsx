import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getCaseStudy } from '../data/caseStudies';
import portfolio from '../data/portfolio';
import { useLang } from '../context/LangContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useInView } from '../hooks/useInView';
import CaseStudyHeader, { type CaseStudyLink } from '../components/CaseStudyHeader';
import CaseStudySection from '../components/CaseStudySection';
import Footer from '../components/Footer';

const CaseStudy = () => {
    const { slug = '' } = useParams();
    const { t } = useLang();
    const study = getCaseStudy(slug);
    const [ref, inView] = useInView<HTMLElement>(0);
    const headingRef = useRef<HTMLHeadingElement>(null);

    const pageTitle = study
        ? `${study.title} - Case Study | Luca Del Corona`
        : (t('caseStudies.notFound.title') as string);
    const summary = study ? (t(`caseStudies.${study.slug}.summary`) as string) : '';

    useDocumentTitle(pageTitle);

    useEffect(() => {
        if (!study) return;
        const meta = document.querySelector('meta[name="description"]');
        if (!meta) return;
        const previous = meta.getAttribute('content');
        meta.setAttribute('content', summary);

        return () => {
            if (previous !== null) meta.setAttribute('content', previous);
        };
    }, [study, summary]);

    useEffect(() => {
        headingRef.current?.focus({ preventScroll: true });
    }, [slug]);

    if (!study) {
        return (
            <section className="py-16">
                <div className="max-w-[720px] mx-auto text-center py-20">
                    <h1
                        ref={headingRef}
                        tabIndex={-1}
                        className="font-head text-3xl md:text-5xl font-bold tracking-tight text-fg mb-4 focus:outline-none"
                    >
                        {t('caseStudies.notFound.title')}
                    </h1>
                    <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
                        {t('caseStudies.notFound.sub')}
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-full font-semibold text-accent hover:underline underline-offset-[3px]"
                    >
                        {t('caseStudies.notFound.cta')}
                    </Link>
                </div>
                <Footer />
            </section>
        );
    }

    const fallbackImg = portfolio.find((project) => project.id === study.projectId)?.imgUrl;
    const fallbackImgDark = portfolio.find((project) => project.id === study.projectId)?.imgDarkUrl;

    const links: CaseStudyLink[] = [];
    if (study.liveUrl) {
        links.push({
            href: study.liveUrl,
            label: t('caseStudies.meta.live') as string,
            icon: 'fas fa-external-link-alt',
        });
    }
    if (study.sourceUrl) {
        links.push({
            href: study.sourceUrl,
            label: t('caseStudies.meta.code') as string,
            icon: 'fab fa-github',
        });
    }

    const sections = study.sections.map((section) => ({
        id: section.id,
        title: t(section.titleKey) as string,
        body: t(section.bodyKey) as string,
        bullets: section.bulletsKey ? (t(section.bulletsKey) as string[]) : undefined,
        callout: section.calloutKey ? (t(section.calloutKey) as string) : undefined,
    }));

    return (
        <section className="py-16">
            <div className="max-w-[720px] mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent mb-10"
                >
                    {t('caseStudies.back')}
                </Link>
                <article ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'}>
                    <CaseStudyHeader
                        title={study.title}
                        titleRef={headingRef}
                        subtitle={t(study.subtitleKey) as string}
                        role={t(study.roleKey) as string}
                        stack={study.stack}
                        links={links}
                        coverImg={study.coverImg ?? fallbackImg}
                        coverImgDark={study.coverImgDark ?? fallbackImgDark}
                        coverContain={study.coverContain}
                        coverCaption={
                            study.coverCaptionKey
                                ? (t(study.coverCaptionKey) as string)
                                : undefined
                        }
                    />

                    {sections.map((section) => (
                        <CaseStudySection
                            key={section.id}
                            title={section.title}
                            body={section.body}
                            bullets={section.bullets}
                            callout={section.callout}
                        />
                    ))}

                    {links.length > 0 && (
                        <div className="flex flex-wrap justify-end gap-3 mt-4">
                            {links.map((link) => (
                                <a
                                    key={`footer-${link.href}-${link.label}`}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-subtle text-sm text-muted px-4 py-2 transition-[color,border-color,transform] active:scale-[0.97] hover:text-fg hover:border-strong"
                                >
                                    <i className={link.icon} aria-hidden="true" />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </article>
            </div>
            <Footer />
        </section>
    );
};

export default CaseStudy;
