import { Component } from '@angular/core';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { LoginComponent }  from './components/login/login.component';
import { SignupBenefitComponent }  from './components/signup-benefits/signup.benefit.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [NavbarComponent, LoginComponent, SignupBenefitComponent]
})
export class AppComponent { }
