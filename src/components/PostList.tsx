import Tabs, { ITab } from '@components/Tabs';
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

    const { data: posts, isLoading } = useGetPosts(categoryId);

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
        </div>
    );
}

export default PostList;
