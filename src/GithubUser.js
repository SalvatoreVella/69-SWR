import { useGithubUser } from "./useGithubUser"

export default function GithubUser({ name }) {
    const {data, isLoading, error, onRefresh} = useGithubUser(name);


    return (<div>
        {isLoading && <h1>Loading...</h1>}
         {error ? <h1>User {name} Not Found</h1> : 
         data?.id && <div>
                <h1>Github Profile: {data.name || name}</h1>
                <p>User id: {data.id}</p>
                <p>Followers: {data.followers}</p>
                <p>Repos: {data.public_repos}</p>
                <button onClick={onRefresh}>Refresh infos</button>
            </div>} 
        </div>
    )
}