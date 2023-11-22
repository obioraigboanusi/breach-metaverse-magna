import { Link } from 'react-router-dom';
import heroGif from "@assets/hero-gif.gif"

function Hero() {
    return (
        <section className="bg-[#FCFAFF] py-[60px]">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2 items-center">
                    <div>
                        <h1 className="font-semibold text-5xl lg:text-[80px] lg:leading-extra mb-10 lg:tracking-[-0.8px]">
                            Find <span className="text-primary-700">Great</span> <br /> Ideas
                        </h1>
                        <p className="mb-10 leading-normal text-2xl ">Subscribe to your favourite creators and thinkers. Support work that matters</p>
                        <Link to="/auth/register" className="btn btn-primary min-h-[69.176px] font-grotesk text-[20px] font-bold">
                            Join Breach
                        </Link>
                    </div>
                    <div>
                        <img src={heroGif} alt="a boy looking into a telescope" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
