import { Promise } from "../../models/promise";
export interface IUserService {
    getUsers(): Promise;
}