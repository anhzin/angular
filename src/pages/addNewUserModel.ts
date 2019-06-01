import { BaseModel } from "@app/common";
import { required } from "@app/common";
export class AddNewUserModel extends BaseModel {
    @required("addNewUser.firstNameWasRequired")
    public firstName: string;
    @required("addNewUser.lastNameWasRequired")
    public lastName: string;
    @required("addNewUser.userNameWasRequired")
    public userName: string;
}