import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import UserCard from "./UserCard";


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
              {loading ? <p>Loading...</p> : searchResults.map(user => <UserCard data={user} />)}
            </div>
        </div>
    )
}

export default Search;
