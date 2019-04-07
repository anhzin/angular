import { ErrorMessages, IoCNames } from "../common/enums";
import { IoCBuilderFactory } from "../ioc/builder/iocBuilderFactory";
import { IIoCBuilder } from "./builder/iiocBuilder";
import {IAppSettingService} from "../services/iAppSettingService";
export class IoCFactory {
    public static create(): IoCContainer {
        return new IoCContainer();
    }
}

class IoCContainer implements IIoCContainer {
    public registrations: Array<IIoCRegistration> = [];
    public import(registrations: Array<IIoCRegistration>): void {
        this.registrations = registrations;
    }

    public resolve(nameOrType: string): IIoCRegistration {
        if (typeof (nameOrType) == "function") {
            return this.processAngularInjection(nameOrType);
        }
        let registration = this.registrations.firstOrDefault((item: IIoCRegistration) => {
            return item.name == nameOrType;
        });

        if (!registration) {
            throw ErrorMessages.InvalidLifeCycle;
        }

        let iocBuilder: IIoCBuilder = IoCBuilderFactory.create(registration);
        return iocBuilder.build(registration);
    }

    private processAngularInjection(nameOrType: any): any {
        let appSettingService: IAppSettingService = window.ioc.resolve(IoCNames.IAppSettingService);
        let injector = appSettingService.getInjector();
        return injector.get(nameOrType);

    }
}