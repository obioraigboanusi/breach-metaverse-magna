import moment from 'moment';

function StreamPostCard({ post }: { post: IPost }) {
    const { title, content, author, createdAt } = post || {};
    const date = moment(new Date(createdAt)).format('DD MMM YYYY');
    return (
        <article>
            <h3 className="text-gray font-semibold mb-1 uppercase">{title}</h3>
            <p className="text-gray-600 mb-1 line-clamp-3">{content}</p>
            <div className="flex gap-3 items-center text-xs">
                <span>{author.name}</span>
                <span className="block w-[4px] h-[4px] bg-gray rounded-full" />
                <span className="uppercase">{date}</span>
            </div>
        </article>
    );
}

export default StreamPostCard;
