import { IUserService } from "./iuserService";
import { Promise } from "@app/common";
import { IoCNames } from "@app/common";
import { IConnector } from "@app/common";
import { AddNewUserModel } from "../../pages/addNewUserModel";
export class UserService implements IUserService {
    public getUsers(): Promise {
        let iConnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url: string = "/rest/api/users";
        return iConnector.get(url);
    }

    public createUser(model: AddNewUserModel): Promise {
        let iConnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url: string = "/rest/api/users";
        return iConnector.post(url, model);
    }
}