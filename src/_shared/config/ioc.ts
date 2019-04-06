import { IoCNames, IIoCLifeCycle } from "../common/enums";
import { UserService } from "../services/userService";

let registrations: Array<IIoCRegistration> = [
    { name: IoCNames.IUserService, instanceOf: UserService, lifeCycle: IIoCLifeCycle.Transient }
];

export default registrations;