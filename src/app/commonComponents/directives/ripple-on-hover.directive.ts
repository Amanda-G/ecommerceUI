import {Directive, ElementRef, HostListener} from '@angular/core';
import {MatRipple} from '@angular/material/core';

@Directive({
  selector: '[appRippleOnHover]',
  providers: [MatRipple]
})
export class RippleOnHoverDirective {

  rippleRef;

  constructor(private elementRef: ElementRef, private matRipple: MatRipple) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.elementRef && this.elementRef.nativeElement && this.matRipple) {
      this.elementRef.nativeElement.style.overflow = 'hidden';
      this.rippleRef = this.matRipple.launch({centered: true, persistent: false});
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.rippleRef) {
      this.rippleRef.fadeOut();
    }
  }
}
