import Footer from '@components/layout/Footer';
import Hero from '@components/Landing/Hero';
import Posts from '@components/Landing/Posts';
import Navbar from '@components/layout/Navbar';
import ScrollToTopButton from '@components/common/ScrollToTopButton';

function Landing() {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <Posts />
            <ScrollToTopButton />
            <Footer />
        </div>
    );
}

export default Landing;
