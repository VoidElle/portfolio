import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Stats from '../components/Stats';
import Timeline from '../components/Timeline';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Intro />
            <Portfolio />
            <Skills />
            <Stats />
            <Timeline />
            <Achievements />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
