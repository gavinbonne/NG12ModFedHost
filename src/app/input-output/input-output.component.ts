import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

    reactMFELoaded: boolean = false;
    sayHello: string = 'Hello, Gavin!';

    constructor() { }

    ngOnInit(): void {
        this.loadReactMFE();
    }

    sayHelloChange(value: string) {
        console.log('sayHello: ', value);
    }

    async loadReactMFE() {
        await import('reactMfeSandbox/reactMfeInputOutput');
        this.reactMFELoaded = true;
        // const element = document.createElement('react-mfe-tile');
        // element.setAttribute('sayHello', this.sayHello)
        // this.parentElementRef.nativeElement.appendChild(element);
    }

}
