import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseOver() {
    this.setBackgroundColor(this.color);
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setBackgroundColor('');
  }

  private setBackgroundColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
