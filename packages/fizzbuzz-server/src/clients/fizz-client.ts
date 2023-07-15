import axios from "axios";

export async function getFizz(n: Number): Promise<String> {
    const response = await axios.get(`http://localhost:1234/${n}`);
    return String(response.data)
}