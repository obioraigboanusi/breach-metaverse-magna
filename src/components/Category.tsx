function Category({ category }: { category: ICategory }) {
    return (
        <div className="px-3 flex items-center text-sm gap-3 border border-gray-100 rounded-lg h-[38px]">
            <span>{category.icon}</span>
            <span className="font-medium">{category.name}</span>
        </div>
    );
}

export default Category;
