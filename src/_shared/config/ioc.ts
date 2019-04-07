import { IoCNames, IIoCLifeCycle } from "../common/enums";
import { UserService } from "../services/userService";
import { AppSettingService } from "../services/appSettingService";
import { ConnectorJson } from "../connector/connectorJson";

let registrations: Array<IIoCRegistration> = [
    { name: IoCNames.IUserService, instanceOf: UserService, lifeCycle: IIoCLifeCycle.Transient },
    { name: IoCNames.IAppSettingService, instanceOf: AppSettingService, lifeCycle: IIoCLifeCycle.Singleton },
    { name: IoCNames.IConnector, instanceOf: ConnectorJson, lifeCycle: IIoCLifeCycle.Transient }
];

export default registrations;