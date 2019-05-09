import { Directive, Input, ElementRef, AfterContentInit } from "@angular/core";
import { IoCNames } from "../common/enums";
import { IEventManager } from "../event/ieventManager";

@Directive({
    selector: "[validation]"
})
export class Validation implements AfterContentInit {
    @Input("validation") messages: Array<string>;
    private ui: ElementRef;
    constructor(ref: ElementRef) {
        this.ui = ref;
    }

    public ngAfterContentInit() {
        let self = this;
        let eventManager: IEventManager = window.ioc.resolve(IoCNames.IEventManager);
        this.messages.forEach((key: string) => {
            eventManager.subscribe(key, (arg: any) => {
                self.onTrigger(key);
            });
        });
    }

    private onTrigger(key: string) {
        console.log(key);
        this.ui.nativeElement.classList.add(ValidationConst.InvalidStatus);
    }
}

const ValidationConst = {
    InvalidStatus: "validation--fail"
}