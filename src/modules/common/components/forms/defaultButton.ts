import { Input, Output, EventEmitter, Component } from "@angular/core";

@Component({
    selector: "default-button",
    template: `<button type="button" (click)="onClicked.emit($event)" class="btn btn-default">{{label}}</button>`
})
export class DefaultButton {
    @Input() label: string;
    @Output() onClicked: EventEmitter<any> = new EventEmitter();
}