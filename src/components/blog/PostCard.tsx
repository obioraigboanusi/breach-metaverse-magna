import moment from 'moment';

function PostCard({ post }) {
    const { title, content, author, createdAt, series, imageUrl } = post || {};
    const date = moment(new Date(createdAt)).format('DD MMM YYYY');

    return (
        <div className="post-card grid gap-[28px] group">
            <div className="h-[186px] rounded-2xl border border-gray-300">
                <img src={imageUrl} alt={title} className="w-full h-full max-h-[184px] object-cover object-center rounded-2xl" />
            </div>
            <div className="">
                <p className="uppercase mb-4 text-sm text-gray-600">{series.name}</p>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary">{title}</h3>
                <p className="mb-3 text-gray-600">{content}</p>
                <div className="flex gap-3 items-center text-xs">
                    <span>{author.name}</span>
                    <div className="w-[4px] h-[4px] bg-gray rounded-full" />
                    <span>{date?.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
