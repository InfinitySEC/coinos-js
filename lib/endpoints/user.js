export async function accountInfo(url, token) {

    const response = await fetch(`${url}/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    const data = await response.json();

    return data
}


