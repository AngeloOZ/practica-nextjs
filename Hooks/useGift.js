import useSWR from "swr";
import axios from "axios";


const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useGift = () => {
    const { data, error } = useSWR("/api/gif", fetcher);

    return {
        gifs: data,
        isLoading: !error && !data,
        isError: error
    }
}


