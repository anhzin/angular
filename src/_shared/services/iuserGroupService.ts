import { Promise } from "../../models/promise";
export interface IUserGroupService {
    getUserGroups(): Promise;
}