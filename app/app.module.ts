import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import {ScreenChange} from "./services/screen.change.service";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers: [ScreenChange],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
