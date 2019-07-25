import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appNavRestrict]'
})
export class NavRestrictDirective implements AfterViewInit {

  constructor(
    private _el: ElementRef
  ) { }

  @Input('appNavRestrict') roles: string = '';

  // We can read from current user info
  private _activeUserRole: string = 'supervisor';

  ngAfterViewInit(): void {
    this._restrictNavigation();
  }

  private _restrictNavigation() {
    const roles = this.roles.toUpperCase().split(',');
    const isExists = roles.find(item => {
      return item.trim() === this._activeUserRole.trim().toUpperCase();
    });
    if (!isExists) {
      this._el.nativeElement.remove();
    }
  }
}
