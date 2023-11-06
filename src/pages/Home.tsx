import banner from '@assets/user-banner.png';
import PostList from '@components/blog/PostList';
import StreamPosts from '@components/blog/StreamPosts';

function Dashboard() {
    return (
        <div className="grid grid-cols-[1fr_404px]">
            <div className="px-[36px] py-[41px]">
                <div className="relative">
                    <header className="mb-[18px]">
                        <h1 className="text-[28px] font-bold">Top Picks</h1>
                        <p className="text-gray-600">Experience the best of Breach</p>
                    </header>
                    <article>
                        <img src={banner} alt="banner" className="w-full mb-3" />
                        <h2 className="font-semibold text-[24px] mb-1">How to succeed at long-term investments</h2>
                        <p className="text-gray-600">
                            I recently started contemplating how to apply my carefree mentality to my financial planning. I&apos;ve mainly been
                            considering looking at my crypto wallets whenever I feel
                        </p>
                    </article>
                    <div className="dash-posts mt-[50px]">
                        <PostList />
                    </div>
                </div>
            </div>

            <aside className="px-[28px] border border-gray-200">
                <div className="sticky top-[1px] py-[41px]">
                    <header className="pb-[24px] mb-[24px] border-b border-[#EDEDED]">
                        <h2 className="font-semibold text-xl text-gray mb-1">Streams</h2>
                        <p className="text-gray-600">Discover trending content from topics you care about in real time</p>
                    </header>
                    <StreamPosts />
                </div>
            </aside>
        </div>
    );
}

export default Dashboard;
