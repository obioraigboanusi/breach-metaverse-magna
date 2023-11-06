import { useSearchParams } from 'react-router-dom';
import { useEffect, useCallback } from 'react';

export interface ITab {
    label: string;
    value: string;
}

interface IProps {
    tabs: ITab[] | [];
    name: string;
}

function Tabs({ tabs, name }: IProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get(name);

    const handleSetTab = useCallback(
        (value: string) => {
            searchParams.set(name, value);
            setSearchParams(searchParams, { replace: true });
        },
        [name, searchParams]
    );

    useEffect(() => {
        if (!activeTab) {
            handleSetTab(tabs?.[0]?.value);
        }
    }, [activeTab, tabs]);

    return (
        <div>
            <ul className="flex gap-[40px] mb-[-1px]">
                {tabs.map(({ label, value }: ITab) => (
                    <li key={value}>
                        <button
                            className={[
                                activeTab === value ? 'opacity-100 border-gray-900' : 'opacity-[0.64] border-transparent',
                                'border-b pb-3',
                            ].join(' ')}
                            onClick={() => handleSetTab(value)}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="h-[1px] bg-[#F8F8F8] w-full" />
        </div>
    );
}

export default Tabs;
