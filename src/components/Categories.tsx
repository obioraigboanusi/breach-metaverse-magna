import { useGetCategories } from '@hooks/useBlogServices';
import Category from './Category';

function Categories() {
    const { data: categories } = useGetCategories();

    return (
        <ul className="flex flex-wrap gap-[20px]">
            {categories?.map((category) => (
                <li key={'category-item-' + category.id}>
                    <Category category={category} />
                </li>
            ))}
        </ul>
    );
}

export default Categories;
