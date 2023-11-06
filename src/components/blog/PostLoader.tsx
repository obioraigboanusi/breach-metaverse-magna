function PostLoader() {
    return (
        <div className="post-card grid gap-[28px] animate-pulse ">
            <div className="h-[186px] rounded-2xl bg-gray-300" />
            <div className="flex-1">
                <div className="mb-4 h-3 bg-gray-300 w-[50%] rounded-lg" />
                <div className="mb-3 h-6 bg-gray-300 rounded-lg" />
                <div className="grid grid-cols-3 gap-3 my-8 text-gray-600">
                    <div className="h-3 bg-gray-300 col-span-2 rounded-lg" />
                    <div className="h-3 bg-gray-300 col-span-1 rounded-lg" />
                    <div className="h-3 bg-gray-300 col-span-1 rounded-lg" />
                    <div className="h-3 bg-gray-300 col-span-2 rounded-lg" />
                </div>
                <div className="flex gap-3 items-center text-xs">
                    <div className="h-3 w-[20%] bg-gray-300 rounded-lg" />
                    <div className="w-[4px] h-[4px] bg-gray rounded-full" />
                    <div className="h-3 w-[20%] bg-gray-300 rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default PostLoader;
