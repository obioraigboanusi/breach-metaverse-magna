import Navbar from '@components/Navbar';
import hello from '@assets/welcome.png';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();
    return (
        <section className="welcome">
            <Navbar />
            <div className="container pt-[50px]">
                <div className="flex flex-col items-center ">
                    <div className="relative mb-10 flex flex-col items-center">
                        <img src={hello} alt="" />
                        <div className="message">
                            <div className="text-[15px] font-medium">Hi! I'm Bev. I'm here to help you get the best out of Breach.</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[42px] mb-5 font-semibold">Welcome to Breach 🥳 </h1>
                        <p className="mb-5 max-w-[432px] mx-auto">
                            Just a few quick questions to help personalise your Breach experience. Are you ready?
                        </p>
                        <button onClick={() => navigate('/user/interests')} className="btn bg-gray text-white z-50 relative">
                            Let’s begin!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;
