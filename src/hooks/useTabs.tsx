import { useSearchParams } from 'react-router-dom';

function useTabs(name: string) {
    const [params] = useSearchParams();
    const activeTab = params.get(name);
    return activeTab;
}

export default useTabs;
