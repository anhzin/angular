import {Promise} from "../../models/promise";
import { AddNewUserModel } from "../../pages/addNewUserModel";
export interface IUserService{
    getUsers():Promise;
    createUser(model:AddNewUserModel):Promise;
}