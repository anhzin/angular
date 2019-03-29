import { IUser } from "../../models/user"
export class UserService {
    public getUsers(): Promise<IUser[]> {
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
        let promise = new Promise<IUser[]>((resolve: any, reject: any) => {
            resolve(users);
        });
        return promise;

    }
}