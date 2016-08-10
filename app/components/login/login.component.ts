import { Component, OnInit } from '@angular/core';
import { MdCard, MdCardHeader, MdCardTitleGroup } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MdInput, MdInputModule } from '@angular2-material/input';
import { MdCheckbox, MdCheckboxModule } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioModule } from '@angular2-material/radio';
import { MD_RIPPLE_DIRECTIVES } from '@angular2-material/core';
import { FORM_DIRECTIVES }   from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    directives: [MdInput, MdButton, MdCard, MdCardHeader,
        MdRadioButton, MdCheckbox, 
        MdCardTitleGroup, MD_RIPPLE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}