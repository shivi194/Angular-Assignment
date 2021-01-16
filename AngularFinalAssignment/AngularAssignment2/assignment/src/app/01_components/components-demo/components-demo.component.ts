import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-components-demo',
  templateUrl: './components-demo.component.html',
  styleUrls: ['./components-demo.component.scss']
})
export class ComponentsDemoComponent implements OnInit {
  name: string;
  // users:User[]=[
  //   {
  //   name:'Shivi Gargi',
  //   username:'shivi11821',
  //   email:'shivi@gmail.com',
  //   },
  //   {
  //     name:'Aditi Gargi',
  //     username:'aditi11821',
  //     email:'aditi@gmail.com',
  //   },
  //   {
  //     name:'Satya',
  //     username:'satya11821',
  //     email:'satya@gmail.com',
  //   },
  // ];
  constructor() { }

  ngOnInit(): void {
  }
  onUserViewed(user: User) {
    this.name = user.name;
  }
}
