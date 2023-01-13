import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGithubUser = (name) => {
const { data, error, mutate } = useSWR(name ? `https://api.github.com/users/${name}` : null, fetcher);

    function handleRefresh() {
        mutate(`https://api.github.com/users/${name}`, fetcher)
        console.log("Refresh");
    }
        return {
            data: data, 
            isLoading: !data && !error,
         error,
         onRefresh: handleRefresh,
        };
}