import { accountInfo } from "./endpoints/user.js";
import { createInvoice, checkInvoice, getPayments } from "./endpoints/payment.js";
import {sendBitcoinPayment, sendInternalPayment, sendLightningPayment} from "./endpoints/wallet.js";

export default class Client {
    #url;
    #token;

    constructor(url = "https://coinos.io/api", token) {
        this.#url = url;
        this.#token = token;
    }

    async accountInfo() {
        return await accountInfo(this.#url, this.#token);
    }

    async createInvoice({type = "lightning", amount, webhook = undefined, secret = undefined}) {
        return await createInvoice({
            url: this.#url, 
            token: this.#token, 
            type: type, 
            amount: amount, 
            webhook: webhook, 
            secret: secret
        })
    }

    async checkInvoice(hash) {
        return await checkInvoice({
            url: this.#url, 
            token: this.#token, 
            hash: hash
        })
    }

    async getPayments({start = undefined, end = undefined, limit = undefined, offset = undefined} = {}) {
        return await getPayments({
            url: this.#url, 
            token: this.#token, 
            start: start, 
            end: end, 
            limit: limit, 
            offset: offset
        });
    }

    async sendInternalPayment(username, amount) {
        return await sendInternalPayment({
            url: this.#url, 
            token: this.#token,
            username: username,
            amount: amount
        });
    }
    
    async sendLightningPayment(payreq) {
        return await sendLightningPayment({
            url: this.#url, 
            token: this.#token,
            payreq: payreq
        });
    }

    async sendBitcoinPayment(address, amount) {
        return await sendBitcoinPayment({
            url: this.#url, 
            token: this.#token,
            address: address,
            amount: amount
        });
    }
}
