import { useState } from "react";
import { fetchUserData } from "../services/githubService";


function Search() {
    const [username, setUsername] = useState('');
    const [searchResults, setSearchResluts] = useState([]);
    const [errors, setErros] = useState([]);
    const [loading, setLoading] = useState(false);

    const rest = () => {
        setUsername('');
        setErros([]);
        setLoading(false);
    }

    const handleSumbit = async (e) => {
        e.preventDefault();

        console.log("subumitted");

        if (username.trim().length === 0) {
            setErros(["Search field can't be empty!"]);
            return;
        }

        try {
            setLoading(true)
            await new Promise(res => setTimeout(res, 3000))
            const data = await fetchUserData(username);
            setSearchResluts(prev => [...prev, data]);
            rest()
        } catch(error) {
            setErros(prev => [...prev, error.message])
        }
    }

    const clearSearchResults = () => setSearchResluts([]);

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <div className="flex gap-2 items-center">
                    <label>
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Search github usernames"
                            className="p-2 rounded-md border border-slate-300 outline-1 outline-slate-300"
                        />
                    </label>
                    <button type="submit">Search</button>
                    <button
                      type="button"
                      onClick={clearSearchResults}
                    >
                        Clear
                    </button>
                </div>
            </form>
            <ul>
                {errors.length > 0 &&
                    errors.map((error, i) => {
                        return <li className="text-red-500" key={i}>{error}</li>
                    })
                }
            </ul>
            <div className="mt-6">
              {loading ?
                <p>Loading...</p> :
                searchResults.map(user => <UserCard key={user.id} data={user} />)
            }
            </div>
        </div>
    )
}

export default Search;

function UserCard({ data }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-auto my-4">
            <div className="flex items-center p-4">
                <img
                    src={data.avatar_url}
                    alt={data.login}
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">{data.login}</h2>
                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub Profile
                    </a>
                </div>
            </div>
            <div className="bg-gray-100 p-4">
                <p className="text-gray-600 text-sm">
                    <strong>Public Repos:</strong> {data.public_repos}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Public Gists:</strong> {data.public_gists}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Followers:</strong> {data.followers}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Following:</strong> {data.following}
                </p>
            </div>
        </div>
    );
}
