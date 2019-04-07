import { IUserService } from "./iuserService";
import { Promise} from "../../models/promise";
import { IoCNames } from "../common/enums";
import {IConnector} from "../connector/iConnector";
export class UserService implements IUserService {
    public getUsers(): Promise {
        let iConnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url: string = "/api/users.json";
        return iConnector.get(url);
    }
}