import { IEventManager } from "./ieventManager";
import { Hashtable } from "../../models/hash/hashable";
import { IHashtable } from "../../models/hash/ihashable";

export class EventManager implements IEventManager {
    private keys: IHashtable;
    constructor() {
        this.keys = new Hashtable();
    }
    subscribe(key: string, handler: (arg: any) => void): void {
        this.keys.add(key, handler);
    }
    publish(key: string): void {
        let handler: any = this.keys.get(key);
        if (!handler) {
            console.log(key + "not was found");
        }
        handler({ key: key });
    }
}