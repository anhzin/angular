import { IHashable } from "./ihashable";

export class Hashable implements IHashable {
    private data: any = {};
    add(key: string, value: any): void {
        this.data[key] = value;
    }
    get(key: string) {
        return this.data[key];
    }


}