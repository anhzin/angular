export interface IHashable {
    add(key: string, value: any): void;
    get(key: string): any;
}