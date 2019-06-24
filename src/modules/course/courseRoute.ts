import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppCommonModule } from "../common/commonModule";
import { Courses } from "./pages/courses";

let routes: Routes = [
    { path: "", redirectTo: "courses", pathMatch: "full" },
    { path: "courses", component: Courses }
];
@NgModule({
    imports: [
        AppCommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Courses
    ]
})

export class CourseRoute { }