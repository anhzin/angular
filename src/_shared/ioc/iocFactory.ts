import { ErrorMessages } from "../common/enums";
import { IoCBuilderFactory } from "../ioc/builder/iocBuilderFactory";
import {IIoCBuilder} from "./builder/iiocBuilder";
export class IoCFactory {
    public static create(): IoCContainer {
        return new IoCContainer();
    }
}

class IoCContainer {
    public registrations: Array<IIoCRegistration>=[];
    public import(registrations: Array<IIoCRegistration>): void {
        this.registrations = registrations;
    }

    public resolve(name: string): IIoCRegistration {
        let registration = this.registrations.firstOrDefault((item: IIoCRegistration) => {
            return item.name == name;
        });

        if (!registration) {
            throw ErrorMessages.InvalidLifeCycle;
        }

        let iocBuilder: IIoCBuilder = IoCBuilderFactory.create(registration);
        return iocBuilder.build(registration);
    }
}