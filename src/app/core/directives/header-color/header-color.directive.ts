import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appHeaderColor]'
})
export class HeaderColorDirective {
  public isBottom!: boolean;
  public scrollStartPoint = 0;

  constructor(
    private render: Renderer2,
    private elRef: ElementRef,
    private route: Router
  ) {
    this.isBottom = false;
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    this.isBottom = window.scrollY > this.scrollStartPoint;
    if (this.route.url !== '/' && window.scrollY === this.scrollStartPoint) {
      this.render.addClass(this.elRef.nativeElement, 'yellow');
    }
    if (this.route.url === '/' && !this.isBottom) {
      this.render.addClass(this.elRef.nativeElement, 'transparent');
      this.render.addClass(this.elRef.nativeElement, 'white');
      this.render.removeClass(this.elRef.nativeElement, 'yellow');
    } else {
      this.render.removeClass(this.elRef.nativeElement, 'transparent');
      this.render.removeClass(this.elRef.nativeElement, 'white');
      this.render.addClass(this.elRef.nativeElement, 'yellow');
    }
  }
}
