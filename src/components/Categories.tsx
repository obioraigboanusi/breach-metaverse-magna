import { useGetCategories } from '@hooks/useBlogServices';
import Category from './Category';
import { useSearchParams } from 'react-router-dom';

function Categories() {
    const { data: categories } = useGetCategories();
    const [params, setParams] = useSearchParams();

    const activeCategory = params.get('category') || undefined;

    const selectedCategory = (id: number) => {
        if (!!activeCategory && +activeCategory === id) {
            params.delete('category');
        } else {
            params.set('category', id.toString());
        }
        setParams(params);
    };

    return (
        <ul className="flex flex-wrap gap-[20px]">
            {categories?.map((category: ICategory) => (
                <li key={'category-item-' + category.id}>
                    <Category isSelected={!!activeCategory && category.id === +activeCategory} onSelect={selectedCategory} category={category} />
                </li>
            ))}
        </ul>
    );
}

export default Categories;
