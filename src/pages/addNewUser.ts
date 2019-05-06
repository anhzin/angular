import { Component } from "@angular/core";
import { BasePage } from "../models/basePage";
import { AddNewUserModel } from "../pages/addNewUserModel";
import { IUserService } from "../_shared/services/iuserService";
import { IoCNames } from "../_shared/common/enums";
import { Router } from "@angular/router";
@Component({
    templateUrl: "src/pages/addNewUser.html"
})
export class AddNewUser extends BasePage {
    public model: AddNewUserModel;
    private router: Router;
    constructor(router: Router) {
        super();
        this.model = new AddNewUserModel();
        this.router = router;
    }

    public onSaveClicked(): void {
        if (!this.isValid()) {
            console.log("isvalid");
            return;
        }
        let service: IUserService = window.ioc.resolve(IoCNames.IUserService);
        let self = this;
        service.createUser(this.model).then(() => {
            self.router.navigate(["users"]);
        });
    }

    private isValid(): boolean {
        let isValided: boolean = true;
        let eventManager = window.ioc.resolve(IoCNames.IEventManager);
        if (this.model.firstName.trim() == "") {
            isValided = false;
           
            eventManager.publish("addNewUser.firstNameWasRequired");
        }
        if ( this.model.lastName.trim() == "" ) {
            isValided = false;
           
            eventManager.publish("addNewUser.lastNameWasRequired");
        }
        if (this.model.userName.trim() == "") {
            isValided = false;
           
            eventManager.publish("addNewUser.userNameWasRequired");
        }
        return isValided;
    }
    public onCancelClicked(): void {
        this.router.navigate(["users"]);
    }
}