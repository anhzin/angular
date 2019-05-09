export interface IEventManager {
    subscribe(key: string, value: any): void;
    publish(key: string): void;
}