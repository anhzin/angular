import { IUserGroupService } from "./iuserGroupService";
import { Promise } from "@app/common";
import { IConnector } from "@app/common";
import { IoCNames } from "@app/common";
export class UserGroupService implements IUserGroupService {
    getUserGroups(): Promise {
        let uri = "rest/api/userGroups";
        let connector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return connector.get(uri);
    }

}