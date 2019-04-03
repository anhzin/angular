import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IUser } from "../../models/user";
import { BasePage } from "../../models/basePage";

@Component({
    selector: "user-preview",
    templateUrl: "src/_shared/components/userPreview.html"
})

export class UserPreview extends BasePage {
    @Input() user: IUser;
    @Output() onCancelled: EventEmitter<any> = new EventEmitter();
    @Output() onSaved: EventEmitter<any> = new EventEmitter();

    public onCancelClicked() {
        this.onCancelled.emit();
    }

    public onSaveClicked() {
        this.onSaved.emit(this.user);
    }
}