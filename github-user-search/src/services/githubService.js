import axios from "axios";



export async function fetchUserData(username) {
    const url = `https://api.github.com/users/${username}`
    try {
        const response = await axios.get(url)
        console.log("data ===>", response.data);
        return response.data
    } catch(error) {
       console.error(error)
       throw new Error("Looks like we cant find the user")
    }
}
