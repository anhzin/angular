import {UserService} from "../services/userService";
import {IoCNames, IoCLifeCycle} from "../common/enums";
let registrations: Array<IoCRegistration> = [
    { name: IoCNames.IUserService, instanceOf: UserService, lifeCycle: IoCLifeCycle.Transient }
]
export default registrations;