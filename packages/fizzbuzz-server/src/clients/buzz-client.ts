import axios from "axios";

export async function getBuzz(n: Number): Promise<String> {
    const response = await axios.get(`http://localhost:1235/${n}`);
    return String(response.data)
}