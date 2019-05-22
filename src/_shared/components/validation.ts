import { Directive, Input, ElementRef, AfterContentInit } from "@angular/core";
import { IoCNames, ValidationStatus } from "../common/enums";
import { IEventManager } from "../event/ieventManager";
import { BaseComponent } from "../../models/baseComponent";

@Directive({
    selector: "[validation]"
})
export class Validation extends BaseComponent implements AfterContentInit {
    @Input("validation") messages: Array<string>;
    private ui: ElementRef;
    constructor(ref: ElementRef) {
        super();
        this.ui = ref;
    }

    public ngAfterContentInit() {
        let self = this;
        let eventManager: IEventManager = window.ioc.resolve(IoCNames.IEventManager);
        this.messages.forEach((key: string) => {
            eventManager.subscribe(key, (arg: any) => {
                self.onTrigger(arg);
            });
        });
    }

    private onTrigger(arg: any) {

        if (arg.options == ValidationStatus.Success) {
            this.ui.nativeElement.classList.remove(ValidationConst.InvalidStatus);
            this.ui.nativeElement.title = "";
        } else {
            this.ui.nativeElement.classList.add(ValidationConst.InvalidStatus);
            this.ui.nativeElement.title = this.i18nHelper.resolve(arg.key);
        }
    }
}

const ValidationConst = {
    InvalidStatus: "validation--fail"
}