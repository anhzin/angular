import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./pages/users";
let routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: "full" },
    { path: "users", component: Users, pathMatch: "full" }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutes { }