import { Address } from "./address";

export class User {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    is_admin: boolean;
    addresses: Address[];

    constructor() {
        this.id = "";
        this.first_name = "";
        this.last_name = "";
        this.username = "";
        this.is_admin = false;
        this.addresses = [];
    }
}