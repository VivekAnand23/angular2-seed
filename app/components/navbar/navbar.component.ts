import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    projectName: string;
    constructor() {
        this.projectName = "AngularSeed"
    }

    ngOnInit() { }
}
