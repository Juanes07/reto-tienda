import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';


//Services
import {MessageService} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [],
  exports: [
    RadioButtonModule,
    ButtonModule,
    CardModule,
    DialogModule,
    RippleModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class PrimeNgModule { }
