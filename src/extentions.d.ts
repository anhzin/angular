declare interface Array<T> {
    firstOrDefault(predicate?: any): T;
    remove(item: any): any;
    removeIf(predicate?: any): void;
    isEmpty():boolean;
}

declare interface Object {
    clone(): any;
}

declare interface String {
    format(...parameters: string[]): string;
}

declare interface StringConstructor {
    format(...parameters: string[]): string;
}

declare interface Window {
    ioc: IIoCContainer;
}

declare interface IIoCContainer {
    import(registrations: Array<IIoCRegistration>): void;
    resolve(nameOrType: any): any;
}

declare interface IIoCRegistration {
    name: string;
    instanceOf: any;
    lifeCycle: IIoCLifeCycle,
    instance?: any
}

declare enum IIoCLifeCycle {
    Singleton = 1,
    Transient = 2
}