import useSWR from 'swr';
import Fetcher from '@/lib/Fetcher';

const useBillboard = () => {
    const {data, error, isLoading} = useSWR('/api/random', Fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus:false,
        revalidateOnReconnect: false,
    })
    return{
        data,
        error,
        isLoading
    }
}

export default useBillboard;