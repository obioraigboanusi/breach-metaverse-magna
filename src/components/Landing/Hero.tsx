import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="bg-[#FCFAFF] py-[60px]">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center">
                    <div>
                        <h1 className="font-semibold text-7xl leading-extra  mb-10">
                            Find <span className="text-primary-700">Great</span> <br /> Ideas
                        </h1>
                        <p className="mb-10 leading-normal text-2xl ">Subscribe to your favourite creators and thinkers. Support work that matters</p>
                        <Link to="register" className="btn btn-primary min-h-[69.176px]">
                            Join Breach
                        </Link>
                    </div>
                    <div>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/9f73/9ba6/454ab32b7aa0aa9d929eff56a01dd3f6?Expires=1699833600&Signature=eYUAH9B3DAawh4~ENNpk-8Y1qT3KmN0b6qkPRvmoYlKD-DzyAoD564QzsqsB53qU7tJ5aDrrH-tQGRhNRa4zKiMHAVNkdml1Z4NuVbomyRZ~8aQavsH75we2XSaBvRyNDBnLfo3auaBWIZPrcz4s-wH5LUvP8TmxZJao8XLJNlZQx3kscI8sgnO0Vs5H1GMs3d7Ae32-Yt4Iq1N8~vt50UU2TG9pyPyzm3YQnozbMu7q2AIzvroU6SKsHddpL8ZmuWetlkwetYkiNr7crIsIFDtBMw5YCP0mysGAniVxeVWAxAX5pKAZhcfCueYrJof5ymYx75y82Rau5Qje6lbBcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="banner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
