import Tabs, { ITab } from '@components/common/Tabs';
import PostCard from './PostCard';
import { useGetPosts } from '@hooks/useBlogServices';
import { useSearchParams } from 'react-router-dom';
import PostLoader from './PostLoader';

const tabs: ITab[] = [
    { label: 'Featured', value: 'featured' },
    { label: 'Popular', value: 'popular' },
    { label: 'Recent', value: 'recent' },
];

function PostList() {
    const [params] = useSearchParams();
    const categoryId = params.get('category') || '';

    const { data: posts, isLoading, isError } = useGetPosts(categoryId);

    return (
        <div>
            <Tabs name="tab" tabs={tabs} />

            <ul className="grid grid-cols-1 gap-[64px] mt-[40px]">
                {isLoading
                    ? Array.from({ length: 3 })?.map((_, i) => (
                          <li key={'post-loader-' + i}>
                              <PostLoader />
                          </li>
                      ))
                    : posts?.map((post) => (
                          <li key={'post-item-' + post.id}>
                              <PostCard post={post} />
                          </li>
                      ))}
            </ul>

            {posts?.length === 0 && <p className="text-sm text-grey-600">Posts will show here when available</p>}
            {isError && (
                <p className="text-sm text-grey-600">
                    Unable to fetch posts at this time. Please check your internet connection and refresh the browser
                </p>
            )}
        </div>
    );
}

export default PostList;
