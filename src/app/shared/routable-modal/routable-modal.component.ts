import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routable-modal',
  templateUrl: './routable-modal.component.html',
  styleUrls: ['./routable-modal.component.css']
})
export class RoutableModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('RoutableModalComponent OnInit');
  }

}
