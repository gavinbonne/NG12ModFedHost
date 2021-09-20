import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebComponentRegistry, RegistryItem } from '../entities/web-component-registry';

@Component({
    selector: 'app-web-component-loader',
    template: '<div #parentElementRef></div>',
})
export class WebComponentLoaderComponent implements AfterContentInit {

    @Input()
    childClasses: string[] = [];

    @Input()
    elementName: string;

    @Input()
    importName: RegistryItem;

    @Input()
    parentClasses: string[] = [];

    @ViewChild('parentElementRef', { read: ElementRef, static: true })
    parentElementRef: ElementRef;

    constructor(private route: ActivatedRoute) { }

    ngAfterContentInit(): void {
        const elementName: string = this.elementName ? this.elementName : this.route.snapshot.data['elementName'];
        const importName: RegistryItem = this.importName ? this.importName : this.route.snapshot.data['importName'];

        const importFn: () => Promise<any> = WebComponentRegistry[importName];
        importFn()
            .then((_: any) => console.debug(`element ${elementName} loaded!`))
            .catch((err: any) => console.error(`error loading ${elementName}:`, err));

        this.parentClasses.forEach((c: string) => {
            this.parentElementRef.nativeElement.classList.add(c);
        });
        const element = document.createElement(elementName);
        this.childClasses.forEach((c: string) => {
            element.classList.add(c);
        });
        this.parentElementRef.nativeElement.appendChild(element);
    }
}
