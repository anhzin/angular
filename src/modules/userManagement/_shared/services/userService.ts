import "rxjs/Rx";
import {Promise} from "@app/common";
import {IConnector} from "@app/common";
import { IoCNames } from "@app/common";
import { IUserService } from "./iuserService";
export class UserService implements IUserService {
    public getUsers(): Promise {
        let connector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url:string="/rest/api/users";
        return connector.get(url);
    }
    public createUser(model: any):Promise{
        let connector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url:string="/rest/api/users";
        return connector.post(url, model);
    }
}