import Categories from '@components/blog/Categories';
import PostList from '@components/blog/PostList';

function Posts() {
    return (
        <section className="bg-white py-[60px] mb-[250px]">
            <div className="container relative">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 lg:col-span-2 relative">
                        <PostList />
                    </div>
                    <div>
                        <div className="">
                            <header>
                                <h2 className="font-semibold text-gray text-3xl mb-1">Categories</h2>
                                <p className="mb-4">Discover content from topics you care about</p>
                            </header>
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Posts;
