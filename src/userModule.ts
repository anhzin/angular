import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { Users } from "../src/pages/users";
import { UserPreview } from '../src/_shared/components/userPreview';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes
    ],
    declarations: [Layout, Users, UserPreview],
    bootstrap: [Layout]
})
export class UserModule { }