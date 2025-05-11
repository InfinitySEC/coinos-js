
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
    })

    if (!response.ok) {
        throw new Error("Error in invoice creation");
    }

    return await response.json();
}

export async function checkInvoice({ url, token, hash}) {
    if (hash === undefined) {
        throw new Error("Inform the hash of the invoice.");
    }

    

}


