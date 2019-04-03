import { IUserService } from "./iuserService";
import { Promise, PromiseFactory } from "../../models/promise";
import { IUser } from "../../models/user";
export class UserService implements IUserService {
    public getUsers(): Promise {
        let users: Array<IUser> = [
            { firstName: "zin", lastName: "anh", userName: "zinanh" },
            { firstName: "nguyen", lastName: "anh", userName: "nguyenanh" },
            { firstName: "ha", lastName: "anh", userName: "haanh" }

        ];

        let promise = PromiseFactory.create();
        promise.resolve(users);
        return promise;
    }
}