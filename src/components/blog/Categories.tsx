import { useGetCategories } from '@hooks/useBlogServices';
import Category from './Category';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { debounce } from 'lodash';

function Categories() {
    const { data: categories, isLoading } = useGetCategories();
    const [params, setParams] = useSearchParams();

    const activeCategory = params.get('category') || undefined;

    const [selectedCategory, setSelectedCategory] = useState<number | undefined>(activeCategory ? +activeCategory : undefined);

    const setFilterPosts = debounce((id: number) => {
        if (!!activeCategory && +activeCategory === id) {
            params.delete('category');
        } else {
            params.set('category', id.toString());
        }
        setParams(params);
    }, 200);

    const handleChange = (id: number) => {
        setSelectedCategory(id);
        setFilterPosts(id);
    };

    return (
        <>
            <ul className="flex flex-wrap gap-[20px]">
                {isLoading
                    ? Array.from({ length: 10 }).map(() => <div className={` animate-pulse rounded-lg h-[38px] w-[25%] bg-gray-300`} />)
                    : categories?.map((category: ICategory) => (
                          <li key={'category-item-' + category.id}>
                              <Category isSelected={category.id === selectedCategory} onSelect={handleChange} category={category} />
                          </li>
                      ))}
            </ul>
            {categories?.length === 0 && <p className="text-sm text-grey-600">Categories will show here when available.</p>}
        </>
    );
}

export default Categories;
