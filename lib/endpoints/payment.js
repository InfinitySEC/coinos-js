
export async function createInvoice({ url, token, type, amount, webhook, secret }) {
    if (type != "lightning" && type != "bitcoin") {
        throw new Error("Invalid payment type");
    }

    if (amount <= 0) {
        throw new Error("Invalid amount");
    }

    const response = await fetch(`${url}/invoice`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            "invoice": {
                "amount": amount,
                "type": type,
                "webhook": webhook,
                "secret": secret
            }
        })
    });

    if (!response.ok) {
        throw new Error("Error in invoice creation");
    }

    return await response.json();
}

export async function checkInvoice({ url, token, hash }) {
    if (hash === undefined) {
        throw new Error("Inform the hash of the invoice.");
    }

    const response = await fetch(`${url}/invoice/${hash}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });

    if (response.status == 500) {
        return false;
    }

    if (!response.ok) {
        const text = await response.text();
        console.log(text);
        throw new Error("Error in invoice check");
    }

    return await response.json();
}

export async function getPayments({ url, token, start, end, limit, offset }) {

    const params = new URLSearchParams();

    // Probably bad
    if (start !== undefined) params.append('start', String(start));
    if (end !== undefined) params.append('end', String(end));
    if (limit !== undefined) params.append('limit', String(limit));
    if (offset !== undefined) params.append('offset', String(offset));

    const response = await fetch(`${url}/payments?${params.toString()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        },
    })

    if (!response.ok) {
        throw new Error("Error in payments check");
    }

    return await response.json();
}



