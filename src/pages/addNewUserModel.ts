import { BaseModel } from "../models/baseModel";
import { required } from "../_shared/validation/decorator/required";
export class AddNewUserModel extends BaseModel {
    @required("addNewUser.firstNameWasRequired")
    public firstName: string;
    @required("addNewUser.lastNameWasRequired")
    public lastName: string;
    @required("addNewUser.userNameWasRequired")
    public userName: string;
}