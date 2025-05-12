export async function sendInternalPayment({ url, token, username, amount }) {
    if (!username || !amount) throw new Error("Missing 'username' or 'amount' for internal payment.");

    const response = await fetch(`${url}/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ username, amount })
    });

    if (!response.ok) {
        throw new Error("Internal payment failed");
    }

    return response.json();
}

export async function sendLightningPayment({ url, token, payreq }) {
    if (!payreq) throw new Error("Missing 'payreq' for lightning payment.");

    const response = await fetch(`${url}/payments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ payreq })
    });

    if (!response.ok) {
        throw new Error("Lightning payment failed");
    }

    return response.json();
}

export async function sendBitcoinPayment({ url, token, address, amount }) {
    if (!address || !amount) throw new Error("Missing 'address' or 'amount' for bitcoin payment.");

    const response = await fetch(`${url}/bitcoin/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ address, amount })
    });

    if (!response.ok) {
        throw new Error("Bitcoin payment failed");
    }

    return response.json();
}
