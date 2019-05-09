import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./pages/users";
import { HttpModule } from "@angular/http";
import { AddNewUser } from "./pages/addNewUser";
let routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: Users, pathMatch: 'full' },
    { path: 'addNewUser', component: AddNewUser, pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes), HttpModule],
    exports: [RouterModule]
})
export class UserRoutes { }