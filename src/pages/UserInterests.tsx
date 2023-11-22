import { useState } from 'react';
import Category from '@components/blog/Category';
import GoBack from '@components/common/GoBack';
import Navbar from '@components/layout/Navbar';
import { useGetCategories } from '@hooks/useBlogServices';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { toast } from 'react-toastify';
import { useSaveInterests } from '@hooks/useUserservices';
import boy from "@assets/welcome.png"

function UserInterests() {
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const { data: categories, isError, isLoading } = useGetCategories();
    const { userId } = useAuth();
    const { isLoading: isSaving, mutateAsync } = useSaveInterests();

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
                    <img src={boy} alt="a boy" className="w-[100px] h-[100px] rounded-full" />
                    <h1 className="text-[24px] mb-5 font-semibold">What are your interests? </h1>
                    <p className="mb-5">Select your interests and I'll recommend some series I'm certain you'll enjoy!</p>
                </div>
                <div className="mt-[40px] max-w-[732px] mx-auto">
                    <ul className="flex flex-wrap gap-[20px] justify-center">
                        {isLoading
                            ? Array.from({ length: 10 }).map((_, i) => (
                                  <div key={'interests-item-dummy-' + i} className={` animate-pulse rounded-lg h-[38px] w-[25%] bg-gray-300`} />
                              ))
                            : categories?.map((category: ICategory) => (
                                  <li key={'interests-item' + category.id}>
                                      <Category category={category} isSelected={selectedCategories.includes(category.id)} onSelect={selectCategory} />
                                  </li>
                              ))}
                        {isError && (
                            <p className="text-sm text-grey-600">
                                Unable to fetch categories at this time. Please check your internet connection and refresh the browser
                            </p>
                        )}
                    </ul>
                    {categories?.length === 0 && <p className="text-sm text-grey-600">Categories will show here when available.</p>}
                </div>
                <div className="flex flex-col items-center mt-[40px]">
                    <button
                        disabled={isSaving || isLoading}
                        onClick={saveCategories}
                        className="btn bg-gray text-white z-50  mb-3 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Processing...' : 'Next'}
                    </button>
                    <button disabled={isSaving} onClick={() => navigate('/user/home')} className="">
                        Skip for later
                    </button>
                </div>
            </div>
        </section>
    );
}

export default UserInterests;
