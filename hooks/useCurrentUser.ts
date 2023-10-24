import useSWR from 'swr';

import Fetcher from '@/lib/Fetcher';

 const useCurrentUser =()=> {
    const { data,  error,  isLoading, mutate} = useSWR('/api/current', Fetcher);


  return{
    data, error, isLoading, mutate
  }  
 }

 export default useCurrentUser; 