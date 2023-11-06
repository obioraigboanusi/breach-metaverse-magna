import { useState } from 'react';
import Category from '@components/Category';
import GoBack from '@components/GoBack';
import Navbar from '@components/Navbar';
import { useGetCategories } from '@hooks/useBlogServices';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { toast } from 'react-toastify';
import { useSaveInterests } from '@hooks/useUserservices';

function UserInterests() {
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const { data: categories } = useGetCategories();
    const { userId } = useAuth();
    const { isLoading, mutateAsync } = useSaveInterests();

    const selectCategory = (id: number) => {
        setSelectedCategories((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            }
            return [...prev, id];
        });
    };

    const saveCategories = async () => {
        if (selectedCategories.length === 0) {
            toast.error('You must select at least one category or skip to proceed.');
            return;
        }
        try {
            await mutateAsync({ userId, data: { interests: selectedCategories } });
            toast.success('Your interests have been saved successfully.');
            navigate('/user/home');
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Failed to login. Please try again.');
        }
    };
    return (
        <section className="pb-[50px]">
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
                <div className="mt-[40px] max-w-[732px] mx-auto">
                    <ul className="flex flex-wrap gap-[20px] justify-center">
                        {categories?.map((category: ICategory) => (
                            <li key={'interests-item' + category.id}>
                                <Category category={category} isSelected={selectedCategories.includes(category.id)} onSelect={selectCategory} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center mt-[40px]">
                    <button
                        disabled={isLoading}
                        onClick={saveCategories}
                        className="btn bg-gray text-white z-50  mb-3 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Processing...' : 'Next'}
                    </button>
                    <button disabled={isLoading} onClick={() => navigate('/user/home')} className="">
                        Skip for later
                    </button>
                </div>
            </div>
        </section>
    );
}

export default UserInterests;
