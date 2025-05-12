<p align="center">
  <img src="images/logo.png" alt="Nome do Projeto" width="200"/>
</p>

<h1 align="center">coinos-js</h1>

<p align="center">
  A simple lib for <a href="https://coinos.io">coinos</a> api
</p>

---

## Installation

```bash
npm install coinos-js
```

## Examples

For satisfactory use, we recommend that you read the official coinos api documentation.

```js
import coinos from "coinos-js"

async function test() {
    const service = await coinos.login("cooluser", "coolpass");

    // Get account info.
    const info = await service.accountInfo();
    console.log(info)

    // Create invoice.
    // The type supports lightning chain and conventional chain.
    // The webhook and secret are optional.
    const data = await service.createInvoice("lightning", 1000, "http://coolwebhook.com/api/check", "supersecuresecret");
    console.log(data);

    // Check invoice.
    const invoice_status = await service.checkInvoice("coolhash123");
    console.log(invoice_status);

    // Get payment list
    const payment_list = await service.getPayments();
    console.log(payment_list);

    // Execute payment.
    // Available payment types:
    // - Internal: Coinos user to Coinos user.
    // - Lightning: Payment via the Lightning Network.
    // - Bitcoin: Conventional on-chain Bitcoin payment.

    const internal_payment = await service.sendInternalPayment("coolcoinosuser", 1000);
    console.log(internal_payment);

    const lightning_payment = await service.sendLightningPayment("coolpayreq");
    console.log(lightning_payment);

    const bitcoin_payment = await service.sendBitcoinPayment("cooladdress", 10000);
    console.log(bitcoin_payment);
}
```