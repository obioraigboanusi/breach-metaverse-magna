type ICategory = { category: string };

function Category({ category }: ICategory) {
    return (
        <div className="px-3 flex items-center text-sm gap-3 border border-gray-100 rounded-lg h-[38px]">
            <span> 😃</span>
            <span className="text-medium">{category}</span>
        </div>
    );
}

export default Category;
