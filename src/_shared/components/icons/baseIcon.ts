import { IconSize } from "../../../models/enums";
import { EventEmitter, Component, Input, Output } from "@angular/core";
@Component({
    selector: 'base-icon',
    template: `<a href="#" title="{{title}}" (click)="onClicked.emit($event)" >
    <i class="fa {{cls}}" [ngClass]="
    {
        'fa-2x':ENUMS.IconSize.Normal == size,
        'fa-3x':ENUMS.IconSize.Large == size
    }
    ">
    </i>
    </a>`
})

export class BaseIcon {
    public ENUMS: any = {
        IconSize: IconSize
    }
    @Input() size: IconSize = IconSize.Small;
    @Input() title: string = "";
    @Input() cls: string = "";
    @Output() onClicked: EventEmitter<any> = new EventEmitter();
}