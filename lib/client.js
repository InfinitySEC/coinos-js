import { accountInfo } from "./endpoints/user.js";
import { createInvoice, checkInvoice, getPayments } from "./endpoints/payment.js";

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
        return await getPayments(this.#url, this.#token, start, end, limit, offset);
    } 
}
