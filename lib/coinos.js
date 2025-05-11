import authenticate from "./utils/auth.js"
import Client from "./client.js";

async function login(username, password, url) {
    const token = await authenticate(url, username, password);
    return new Client(url, token);
}

const coinos = { login }
export default coinos;
