export default async function authenticate(url = "https://coinos.io/api", username, password) {
    const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    
    if (!response.ok) {
        throw new Error("Error when logging in");
    }

    const data = await response.json();

    return data.token;
}