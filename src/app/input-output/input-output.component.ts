import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

    reactMFELoaded: boolean = false;
    sayHello: string = 'Hello, Gavin!';
    option1 = { color: 'Green' };
    option2 = { color: 'Blue' };
    selectedOption = this.option1;
    readonly JSON = JSON;

    constructor() { }

    ngOnInit(): void {
        this.loadReactMFE();
    }

    async loadReactMFE() {
        await import('reactMfeSandbox/reactMfeInputOutput');
        this.reactMFELoaded = true;
    }

    toggleSelectedOption() {
        if (this.selectedOption.color === 'Green') {
            this.selectedOption = this.option2;
        } else {
            this.selectedOption = this.option1;
        }
    }
}
