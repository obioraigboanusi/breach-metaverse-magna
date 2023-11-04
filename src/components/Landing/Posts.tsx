import ArrowUp from '@assets/ArrowUp';
import Category from '@components/Category';
import PostCard from '@components/PostCard';
import Tabs, { ITab } from '@components/Tabs';

const categories = [
    ' Humor',
    'Lifehacks',
    'Crypto',
    'Art',
    'Travel',
    'Sports',
    'Photography',
    'Food and drink',
    'History',
    'Science',
    'News',
    'Business',
    'Music',
    'Tech',
    'Faith & Spirituality',
    'Nature',
];
const tabs: ITab[] = [
    { label: 'Featured', value: 'featured' },
    { label: 'Popular', value: 'popular' },
    { label: 'Recent', value: 'recent' },
];

function Posts() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Optional: smooth scrolling animation
        });
    };
    return (
        <section className="bg-white py-[60px] mb-[250px]">
            <div className="container relative">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 lg:col-span-2">
                        <Tabs name="tab" tabs={tabs} />
                        <ul className="grid grid-cols-1 gap-[64px] mt-[40px]">
                            {Array.from({ length: 10 }).map(() => (
                                <li>
                                    <PostCard />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <header>
                            <h2 className="font-semibold text-gray text-3xl mb-1">Categories</h2>
                            <p className="mb-4">Discover content from topics you care about</p>
                        </header>
                        <ul className="flex flex-wrap gap-[20px]">
                            {categories.map((category) => (
                                <li key={category}>
                                    <Category category={category} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="absolute bottom-[2rem] right-[1rem]">
                    <button
                        onClick={scrollToTop}
                        className="h-[60px] w-[60px] rounded-full bg-primary-200 flex justify-center items-center hover:opacity-75 hover:-translate-y-[2px]"
                    >
                        <ArrowUp />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Posts;
