import { IUserService } from "./iuserService";
import {Promise, PromiseFactory} from "../../models/promise";
import {IUser} from "../../models/user";
export class UserService implements IUserService {
    public getUsers(): Promise {
        let users: Array<IUser> = [
            { firstName: "anh", lastName: "nguyen", userName: "anhnguyen" },
            { firstName: "anh1", lastName: "nguyen", userName: "anhnguyen1" },
            { firstName: "anh2", lastName: "nguyen", userName: "anhnguyen2" },
            { firstName: "anh3", lastName: "nguyen", userName: "anhnguyen3" },
        ];

        let promise = PromiseFactory.create();
        promise.resolve(users);
        return promise;
    }
}