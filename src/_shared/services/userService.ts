import { IUser } from "../../models/user"
export class UserService {
    public getUsers(): IUser[] {
        let users: IUser[] = [{
            firstName: "anh",
            lastName: "nguyen",
            userName: "nguyen_anh"
        },
        {
            firstName: "zin",
            lastName: "zin",
            userName: "zin_zin"
        },
        {
            firstName: "thanh",
            lastName: "le",
            userName: "le_thanh"
        }];
        return users;

    }
}