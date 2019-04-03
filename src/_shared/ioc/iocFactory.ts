import { ErrorMessages } from "../common/enums";
import { IIoCBuilder } from "./builder/iiocBuilder";
import { IoCBuilderFactory } from "../ioc/builder/iocBuilderFactory";

export class IoCFactory {
    public static create(): IIoCContainer {
        return new IoCContainer();
    }
}

export class IoCContainer implements IIoCContainer {
    private registrations: Array<IoCRegistration> = [];
    public import(registrations: Array<IoCRegistration>): void {
        this.registrations = registrations;
    }

    public resolve(name: string): any {
        let registration = this.registrations.firstOrDefault((item: IoCRegistration) => {
            return item.name == name;
        });

        if (!registration) {
            throw ErrorMessages.InvalidService.format(name);
        }

        let iocBuilder: IIoCBuilder = IoCBuilderFactory.create(registration);
        return iocBuilder.build(registration);


    }
}