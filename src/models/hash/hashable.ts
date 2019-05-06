import { IHashtable } from "./ihashable";

export class Hashtable implements IHashtable {
    private data: any = {};
    add(key: string, value: any): void {
        this.data[key] = value;
    }
    get(key: string): void {
        return this.data[key];
    }

}