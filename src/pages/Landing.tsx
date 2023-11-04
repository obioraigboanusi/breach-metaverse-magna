import Footer from '@components/Footer';
import Hero from '@components/Landing/Hero';
import Posts from '@components/Landing/Posts';
import Navbar from '@components/Navbar';

function Landing() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Posts />
            <Footer />
        </div>
    );
}

export default Landing;
