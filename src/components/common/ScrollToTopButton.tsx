import ArrowUp from '@assets/ArrowUp';
import { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [showBtn, setShowBtn] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="container py-0 relative">
            {showBtn && (
                <div className="fixed bottom-[200px] right-[190px]">
                    <button
                        onClick={scrollToTop}
                        className="h-[60px] w-[60px] rounded-full bg-primary-200 flex justify-center items-center hover:opacity-75 hover:-translate-y-[2px]"
                    >
                        <ArrowUp />
                    </button>
                </div>
            )}
        </div>
    );
}

export default ScrollToTopButton;
