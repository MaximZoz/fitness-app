import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: "",
    //  component: RegisterComponent,
  },
];

@NgModule({
  declarations: [
    // RegisterComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [],
  providers: [],
})
export class RegisterModule {}
