import { NgModule, ApplicationRef, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { Users } from "../src/pages/users";
import { UserPreview } from "../src/_shared/components/userPreview";
import { IAppSettingService } from "./_shared/services/iAppSettingService";
import { IoCNames } from "./_shared/common/enums";
import { HttpModule } from "@angular/http";
import { IResourceManager } from "./_shared/services/iresourceManager";
import { BaseIcon } from "../src/_shared/components/icons/baseIcon";
import { IconEdit } from "../src/_shared/components/icons/iconEdit";
import { IconPreview } from "../src/_shared/components/icons/iconPreview";
import { Page } from "./_shared/components/layout/page";
import { PageContent } from "./_shared/components/layout/pageContent";
import { PageCommand } from "./_shared/components/layout/pageCommand";
import { FormHorizontal } from "./_shared/components/forms/formHorizontal";
import { FormInputText } from "./_shared/components/forms/formInputText";
import { FormButtons } from "./_shared/components/forms/formButtons";
import { PrimaryButton } from "./_shared/components/forms/primaryButton";
import { DefaultButton } from "./_shared/components/forms/defaultButton";
import { Validation } from "./_shared/components/validation";
import { AddNewUser } from "./pages/addNewUser";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes,
        HttpModule
    ],
    declarations: [Layout, Users, UserPreview, BaseIcon, IconEdit, IconPreview, Page, PageContent, PageCommand,
        FormHorizontal, FormInputText, FormButtons, PrimaryButton, DefaultButton, Validation, AddNewUser],
    entryComponents: [Layout]
    // bootstrap: [Layout]
})
export class UserModule {
    public appRef: ApplicationRef;
    constructor(appRef: ApplicationRef, injector: Injector) {
        let appSetting: IAppSettingService = window.ioc.resolve(IoCNames.IAppSettingService);
        appSetting.setInjector(injector);
        this.appRef = appRef;

    }

    ngDoBootstrap() {
        let resourceManage: IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        let locales: any = ["user", "common", "addNewUser"];
        resourceManage.loadLocales(locales).then(() => {
            this.appRef.bootstrap(Layout);
        });

    }
}