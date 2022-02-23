import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-tesztoldal',
  templateUrl: './tesztoldal.component.html',
  styleUrls: ['./tesztoldal.component.css']
})
export class TesztoldalComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }
}
