import { ErrorMessages } from "../../../models/enums";
import { IIoCBuilder } from "./iiocBuilder";
export class TransientBuilder implements IIoCBuilder {
    public build(registration: IIoCRegistration): any {
        if (!registration) {
            throw ErrorMessages.InvalidService.format("");
        }
        return new registration.instanceOf;
    }
}