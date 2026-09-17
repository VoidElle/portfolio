import { useOutletContext } from 'react-router-dom';

import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Stats from '../components/Stats';
import Timeline from '../components/Timeline';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface Props {
    transitioning: boolean;
}

const Home = () => {
    const { transitioning } = useOutletContext<Props>();

    return (
        <div
            className="transition-opacity duration-200"
            style={{ opacity: transitioning ? 0 : 1 }}
        >
            <Intro />
            <Portfolio />
            <Skills />
            <Stats />
            <Timeline />
            <Achievements />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
