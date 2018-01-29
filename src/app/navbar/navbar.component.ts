import { Component, OnInit,Renderer2 } from '@angular/core';
import {MyService} from '../script.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[MyService]
})
export class NavbarComponent implements OnInit {

  constructor(private sc:MyService,private _renderer2: Renderer2) { }

  ngOnInit() {
    this.sc.setscript(this._renderer2);
  }

}
