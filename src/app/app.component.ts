import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Router Demo';
  showModal = true;

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  openModal() {
    this.showModal = true;
  }

  openInvestorModal() {
    this.openModal();
    this._router.navigate(['.', { outlets: { modal: ['investor-view'] } }], {
      relativeTo: this._route.parent
    });
  }

  openProductModal() {
    this.openModal();
    this._router.navigate(['.', { outlets: { modal: ['product', 'list'] } }], {
      relativeTo: this._route.parent
    });
  }

  closeModal() {
    this._router.navigate(['.', { outlets: { modal: null } }], {
      relativeTo: this._route.parent
    });

    this.showModal = false;
  }
}
