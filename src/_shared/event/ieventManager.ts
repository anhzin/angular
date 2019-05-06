export interface IEventManager {
    subscribe(key: string, handler: (arg: any) => void): void;
    publish(key: string): void;
}