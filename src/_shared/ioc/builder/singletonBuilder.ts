import { IIoCBuilder } from "./iiocBuilder";
import { ErrorMessages } from "../../../models/enums";

export class SingletonBuilder implements IIoCBuilder {
    public build(registration: IIoCRegistration): any {
        if (!registration) {
            throw ErrorMessages.InvalidService.format("");
        }

        if (!registration.instance) {
            registration.instance = new registration.instanceOf;
        }

        return registration.instance;
    }
}