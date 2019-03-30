import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalinformationPage } from './personalinformation';

@NgModule({
  declarations: [
    PersonalinformationPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalinformationPage),
  ],
})
export class PersonalinformationPageModule {}
