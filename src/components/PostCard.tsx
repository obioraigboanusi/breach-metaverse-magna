import postImage from '@assets/post.png';

function PostCard() {
    return (
        <div className="flex gap-[28px] w-full">
            <div className="w-[90%] max-w-[266px] rounded-2xl border border-gray-300">
                <img src={postImage} alt="" className="w-full max-h-[184px] object-cover object-center rounded-2xl" />
            </div>
            <div className="">
                <p className="uppercase mb-4 text-sm text-gray-600">Work in Progress</p>
                <h3 className="text-2xl font-semibold mb-3">On migration and maintaining friendships</h3>
                <p className="mb-3 text-gray-600">
                    I went to boarding school and left pretty early, so I had some experience with losing friends to relocation long before the
                </p>
                <div className="flex gap-3 items-center text-xs">
                    <span>Lota Anidi</span>
                    <span className="block w-[4px] h-[4px] bg-gray rounded-full" />
                    <span>12 Dec 2022</span>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
