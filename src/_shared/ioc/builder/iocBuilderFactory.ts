import { ErrorMessages, IoCLifeCycle } from "../../common/enums";
import { SingletonBuilder } from "../builder/singletonBuilder";
import { TransientBuilder } from "../builder/transientBuilder";
export class IoCBuilderFactory {
    public static create(registration: IoCRegistration): any {
        switch (registration.lifeCycle) {
            case IoCLifeCycle.Singleton:
                return new SingletonBuilder();

            case IoCLifeCycle.Transient:
                return new TransientBuilder();

            default:
                throw ErrorMessages.InvalidLifeCycle;
        }
    }
}