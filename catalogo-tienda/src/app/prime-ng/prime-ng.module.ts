import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import {PanelModule} from 'primeng/panel';
import {TabMenuModule} from 'primeng/tabmenu';

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
    RippleModule,
    PanelModule,
    TabMenuModule,
  ],
  providers: [MessageService, ConfirmationService]
})
export class PrimeNgModule { }
