import { Component } from "@angular/core";
import {BaseIcon} from "./baseIcon";
@Component({
    selector: 'icon-preview',
    template: `<base-icon [size]=size [cls]="'fa-search'" (onClicked)="onClicked.emit($event)">
    </base-icon>`
})

export class IconPreview extends BaseIcon {

}