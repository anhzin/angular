import { IIoCLifeCycle, ErrorMessages } from "../../models/enums";
import { SingletonBuilder } from "./singletonBuilder";
import { TransientBuilder } from "./transientBuilder";
export class IoCBuilderFactory {
    public static create(registration: IIoCRegistration): any {
        if (!registration) {
            throw ErrorMessages.InvalidService.format("");
        }

        switch (registration.lifeCycle) {
            case IIoCLifeCycle.Singleton:
                return new SingletonBuilder();
            case IIoCLifeCycle.Transient:
                return new TransientBuilder();
            default:
                throw ErrorMessages.InvalidLifeCycle;
        }
    }
}