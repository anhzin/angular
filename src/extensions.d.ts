declare interface Array<T> {
    firstOrDefault(callback?: any): T;
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
    import(registrations: Array<IoCRegistration>): void;
    resolve(name: string): any;
}

declare interface IoCRegistration {
    name: string;
    instanceOf: any;
    lifeCycle: IoCLifeCycle,
    instance?: any;
}

declare enum IoCLifeCycle {
    Singleton = 1,
    Transient = 2
}