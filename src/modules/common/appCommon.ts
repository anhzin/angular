import { NgModule } from "@angular/core";
import { BaseIcon } from "./components/icons/baseIcon";
import { IconEdit } from "./components/icons/iconEdit";
import { IconPreview } from "./components/icons/iconPreview";
import { Page } from "./components/layout/page";
import { PageContent } from "./components/layout/pageContent";
import { PageCommand } from "./components/layout/pageCommand";
import { FormHorizontal } from "./components/forms/formHorizontal";
import { FormInputText } from "./components/forms/formInputText";
import { FormButtons } from "./components/forms/formButtons";
import { PrimaryButton } from "./components/forms/primaryButton";
import { DefaultButton } from "./components/forms/defaultButton";
import { Validation } from "./components/validation";
import { Grid } from "./components/grid/grid";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        BaseIcon, IconEdit, IconPreview,
        Page, PageContent, PageCommand,
        FormHorizontal, FormInputText, FormButtons, PrimaryButton, DefaultButton,
        Validation,
        Grid
    ],
    exports: [
        BaseIcon, IconEdit, IconPreview,
        Page, PageContent, PageCommand,
        FormHorizontal, FormInputText, FormButtons, PrimaryButton, DefaultButton,
        Validation,
        Grid
    ]
})
export class AppCommonModule {

}