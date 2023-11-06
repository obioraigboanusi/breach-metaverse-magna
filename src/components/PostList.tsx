import Tabs, { ITab } from '@components/Tabs';
import PostCard from './PostCard';
import { useGetPosts } from '@hooks/useBlogServices';
import { useSearchParams } from 'react-router-dom';

const tabs: ITab[] = [
    { label: 'Featured', value: 'featured' },
    { label: 'Popular', value: 'popular' },
    { label: 'Recent', value: 'recent' },
];

function PostList() {
    const [params] = useSearchParams();
    const categoryId = params.get('category') || '';

    const { data: posts } = useGetPosts(categoryId);

    return (
        <div>
            <Tabs name="tab" tabs={tabs} />
            <ul className="grid grid-cols-1 gap-[64px] mt-[40px]">
                {posts?.map((post) => (
                    <li key={'post-item-' + post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
