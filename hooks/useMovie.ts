import useSWR from "swr";
import Fetcher from "@/lib/Fetcher";

const useMovie = (id: string) => {
    const {data,
         error,
          isLoading } = useSWR(id? `/api/movies//${id}` : null, Fetcher,{
revalidateOnFocus: false,
revalidateIfStale: false,
revalidateOnReconnect: false
    })

    return{
        data,
        error,
        isLoading,
    }
}


export default useMovie

//change to push 
""