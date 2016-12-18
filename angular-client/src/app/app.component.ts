import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

// import rxjs map operator
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app work';

  API = 'http://localhost:3000';

  people: Array<{name: string, age: string, _id: string, __v: number}> = [];

  _id: string;

  constructor(private http: Http) {  }

  ngOnInit() {
    this.getAllPeople();
  }

  addPerson(name, age) {
    this.http
        .post(`${this.API}/users`, {name, age})
        .map(res => res.json())
        .subscribe(() => {
          this.getAllPeople();
        });
  }

  getAllPeople() {
    this.http
        .get(`${this.API}/users`)
        .map(res => res.json())
        .subscribe(people => {
          this.people = people;
        });
  }

  deleteUser(user) {
    this.http
      .delete(`${this.API}/users?id=${user._id}`,)
        .subscribe(() => {
          console.log('User was deleted');      
        });
    this.people.splice(this.people.indexOf(user), 1);
  }
}
