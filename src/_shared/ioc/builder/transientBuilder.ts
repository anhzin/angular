import { IIoCBuilder } from "./iiocBuilder";
import { ErrorMessages } from "../../common/enums";

export class TransientBuilder implements IIoCBuilder {
    public build(registration: IoCRegistration) {
        if (!registration) {
            throw ErrorMessages.InvalidService.format("");
        }
        return new registration.instanceOf;
    }
}