import { Component, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector:'page-content',
    template: `
    <ng-content> </ng-content>
    `
})
export class PageContent{
@Input() title:string;
}