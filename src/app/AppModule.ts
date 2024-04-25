import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RefranceComponent } from './refrance/refrance.component';
import { ColorchangeComponent } from './colorchange/colorchange.component';
import { CommonComponent } from './common/common.component';
import { ReusableComponent } from './reusable/reusable.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        RefranceComponent,
        ColorchangeComponent,
        CommonComponent,
        ReusableComponent,

    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
