interface IProps {
    isSelected?: boolean;
    category: ICategory;
    onSelect?: (arg: number) => void;
}

function Category({ category, onSelect, isSelected }: IProps) {
    return (
        <button
            onClick={() => {
                onSelect && onSelect(category.id);
            }}
            className={[
                'px-3 flex items-center text-sm gap-3 border rounded-lg h-[38px]',
                isSelected ? 'bg-primary text-white border-primary' : 'text-gray bg-transparent border-gray-100 ',
            ].join(' ')}
        >
            <span>{category.icon}</span>
            <span className="font-medium">{category.name}</span>
        </button>
    );
}

export default Category;
