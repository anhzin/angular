import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./pages/users";
import { HttpModule } from "@angular/http";
let routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: '', component: Users, pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes), HttpModule],
    exports: [RouterModule]
})
export class UserRoutes { }