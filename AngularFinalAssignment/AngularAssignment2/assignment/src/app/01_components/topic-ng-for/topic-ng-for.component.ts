import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-topic-ng-for',
  templateUrl: './topic-ng-for.component.html',
  styleUrls: ['./topic-ng-for.component.scss']
})
export class TopicNgForComponent implements OnInit {
 name='';
  users:User[]=[
    {
    name:'Shivi Gargi',
    username:'shivi11821',
    email:'shivi@gmail.com',
    },
    {
      name:'Aditi Gargi',
      username:'aditi11821',
      email:'aditi@gmail.com',
    },
    {
      name:'Satya',
      username:'satya11821',
      email:'satya@gmail.com',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  handleUserViewed(user: User) {
    this.name = user.name;
  }

  handleUserDeleted(userIndex: number) {
    this.users.splice(userIndex, 1);
  }
}
