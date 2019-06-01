import { IoCNames, IIoCLifeCycle } from "../../models/enums";
import { UserService } from "../services/userService";
import { AppSettingService } from "../services/appSettingService";
import { ConnectorJson } from "../connector/connectorJson";
import { ResourceManager } from "../services/resourceManager";
import { EventManager } from "../event/eventManager";
import {UserGroupService} from "../services/userGroupService";
let registrations: Array<IIoCRegistration> = [
    { name: IoCNames.IUserService, instanceOf: UserService, lifeCycle: IIoCLifeCycle.Transient },
    { name: IoCNames.IAppSettingService, instanceOf: AppSettingService, lifeCycle: IIoCLifeCycle.Singleton },
    { name: IoCNames.IConnector, instanceOf: ConnectorJson, lifeCycle: IIoCLifeCycle.Transient },
    { name: IoCNames.IResourceManager, instanceOf: ResourceManager, lifeCycle: IIoCLifeCycle.Singleton },
    { name: IoCNames.IEventManager, instanceOf: EventManager, lifeCycle: IIoCLifeCycle.Singleton },
    { name: IoCNames.IUserGroupService, instanceOf: UserGroupService, lifeCycle: IIoCLifeCycle.Transient }
];

export default registrations;