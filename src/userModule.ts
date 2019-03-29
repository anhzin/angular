import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { Users } from "./pages/users";
import { UserService } from "./_shared/services/userService";
import { UserPreview } from "./_shared/components/userPreview";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes
    ],
    declarations: [Layout, Users, UserPreview],
    providers: [UserService],
    bootstrap: [Layout]
})
export class UserModule { }