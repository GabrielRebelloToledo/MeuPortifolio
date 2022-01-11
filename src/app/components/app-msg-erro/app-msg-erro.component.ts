
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-msg-erro',
    templateUrl: './app-msg-erro.component.html'
})
export class AppMsgErroComponent{

    @Input() mensagem: string = ''
    
}