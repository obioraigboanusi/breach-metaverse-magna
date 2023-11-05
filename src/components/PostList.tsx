import Tabs, { ITab } from '@components/Tabs';
import PostCard from './PostCard';

const tabs: ITab[] = [
    { label: 'Featured', value: 'featured' },
    { label: 'Popular', value: 'popular' },
    { label: 'Recent', value: 'recent' },
];

function PostList() {
    return (
        <div>
            <Tabs name="tab" tabs={tabs} />
            <ul className="grid grid-cols-1 gap-[64px] mt-[40px]">
                {Array.from({ length: 10 }).map(() => (
                    <li>
                        <PostCard />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
