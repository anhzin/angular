import { IoCNames, IIoCLifeCycle } from "@app/common";
import { UserService } from "../services/userService";
import { AppSettingService } from "@app/common";
import { ConnectorJson } from "@app/common";
import { ResourceManager } from "@app/common";
import { EventManager } from "@app/common";
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