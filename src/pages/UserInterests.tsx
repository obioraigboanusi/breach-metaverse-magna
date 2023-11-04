import Category from '@components/Category';
import GoBack from '@components/GoBack';
import Navbar from '@components/Navbar';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserInterests() {
    const navigate = useNavigate();
    return (
        <section className="">
            <Navbar />
            <div className="container pt-[50px]">
                <GoBack />
                <div className="text-center flex flex-col items-center">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/b3c6/8f96/6aef6f003dd62c12b302d3c7cff9dd79?Expires=1699833600&Signature=aN2RSWnGrc4jbzXWLsLyGZJiFxnU84vfQbPiaGZUZ-5GUWEQXJMnq8RlLltIeub58RRtyzIgrZgJe6qsc7XrPRzTIafzkmIzCUQgDvxBFtK00xkdiQQ97AWYbEzxOIoMuBHNuA3kdunuBCXU2p~Rc7U6trYDtW3mlnDcK2NUXgTxTlI64ng-BpHGxkuDTmuEz38UfopogX8ezWx7B8RfeUTBcpSZYI7KmQOdEQK40UM9LN6JBXBmtJS94A4pSI6Dqocm1hz5YXXtbX3aWkK3BQkQZ-tWRUMsVL~CRXUncwSjPvbSivpPlYcvX5tHxkbcrQHNjbXEukkA0v8P-pK4Lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                        className="w-[100px] h-[100px] rounded-full"
                    />
                    <h1 className="text-[24px] mb-5 font-semibold">What are your interests? </h1>
                    <p className="mb-5">Select your interests and I'll recommend some series I'm certain you'll enjoy!</p>
                </div>
                <div className="mt-[40px]">
                    <ul className="flex flex-wrap gap-[20px] justify-center">
                        {Array.from({ length: 20 }).map(() => (
                            <li>
                                <Category category="Business & finance" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center mt-[40px]">
                    <button onClick={() => navigate('/user/interests')} className="btn bg-gray text-white z-50  mb-3">
                        Next
                    </button>
                    <button className="">Skip for later</button>
                </div>
            </div>
        </section>
    );
}

export default UserInterests;
