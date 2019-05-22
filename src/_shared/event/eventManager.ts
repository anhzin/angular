import { IEventManager } from "./ieventManager";
import { IHashable } from "../../models/hash/ihashable";
import { Hashable } from "../../models/hash/hashable";

export class EventManager implements IEventManager {
    private keys: IHashable;
    constructor() {
        this.keys = new Hashable();
    }

    subscribe(key: string, value: any): void {
        this.keys.add(key, value);
    }
    publish(key: string, options?: any): void {
        let handler = this.keys.get(key);
        if (!handler) {
            console.log(key + " was not found");
            return;
        }

        handler({ key: key, options: options });
    }
}