import { Promise } from "@app/common";
import { AddNewUserModel } from "../../pages/addNewUserModel";
export interface IUserService {
    getUsers(): Promise;
    createUser(model: AddNewUserModel): Promise;
}