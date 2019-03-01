import { Directive,OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleDropdown]'
})
export class ToggleDropdownDirective implements OnInit {
  
  constructor() { }

  @HostBinding('class.open') isOpen = false;  
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {}
}
