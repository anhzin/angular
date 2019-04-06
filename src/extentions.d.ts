declare interface Array<T> {
    firstOrDefault(predicate?: any): T;
}

declare interface Object {
    clone(): any;
}

declare interface String {
    format(...parameters: string[]): string;
}

declare interface Window {
    ioc: IIoCContainer;
}

declare interface IIoCContainer {
    import(registrations: Array<IIoCRegistration>): void;
    resolve(name: string): any;
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