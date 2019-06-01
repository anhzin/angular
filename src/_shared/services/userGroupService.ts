import { IUserGroupService } from "./iuserGroupService";
import { Promise } from "../../models/promise";
import { IConnector } from "../connector/iConnector";
import { IoCNames } from "../../models/enums";
export class UserGroupService implements IUserGroupService {
    getUserGroups(): Promise {
        let uri = "rest/api/userGroups";
        let connector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return connector.get(uri);
    }

}