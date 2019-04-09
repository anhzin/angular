import { Component, Input, EventEmitter, Output } from "@angular/core";
import { BaseIcon } from "./baseIcon";
import { IconSize } from "../../common/enums";

@Component({
    selector: "icon-preview",
    template: `<base-icon [size]=size [title]="title" [cls]="'fa-search'" (onClicked)="onClicked.emit($event)"></base-icon>`
})
export class IconPreview extends BaseIcon {
}