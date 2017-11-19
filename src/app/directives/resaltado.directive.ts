import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private _elementRef:ElementRef) {
    console.log("Directiva creada");
    _elementRef.nativeElement.style.color = "red";
   }

   @Input("appResaltado")nuevoColor:string;
  
   @HostListener('mouseenter') mouseEntro(){
     this.resaltar(this.nuevoColor || 'green');
   }
   @HostListener('mouseleave') mouseSalio(){
    this._elementRef.nativeElement.style.color = "red";
   }

   private resaltar(color:string){
    this._elementRef.nativeElement.style.color = color;
  }
}