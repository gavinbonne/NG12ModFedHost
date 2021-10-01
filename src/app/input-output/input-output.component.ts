import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit, AfterContentInit {

    @ViewChild('reactMfeRef', { read: ElementRef, static: true })
    reactMfeRef: ElementRef;

    counter: number = 0;
    redAlert: boolean = false;
    sayHello: string = 'Hello, Gavin!';
    option1 = { color: 'Green' };
    option2 = { color: 'Blue' };
    selectedOption = this.option1;
    readonly JSON = JSON;

    constructor() { }

    ngOnInit(): void {
        this.loadReactMFE();
    }

    ngAfterContentInit() {
        this.reactMfeRef.nativeElement.addEventListener('when_counter_incremented', (e: CustomEvent) => {
            console.log(e.detail);
            this.counter++;
        });
    }

    async loadReactMFE() {
        await import('reactMfeSandbox/reactMfeInputOutput');
    }

    toggleSelectedOption() {
        if (this.selectedOption.color === 'Green') {
            this.selectedOption = this.option2;
        } else {
            this.selectedOption = this.option1;
        }
    }
}
