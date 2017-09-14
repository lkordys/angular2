import {Component, OnInit} from '@angular/core';
import {Person} from "./Person";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})

export class ComponentsComponent implements OnInit {

  personArray: Person[] = [
    {"id": 1, "fullName": "Kathleen Gentry", "age": 62},
    {"id": 2, "fullName": "Richard Mcintosh", "age": 48},
    {"id": 3, "fullName": "Clinton Craig", "age": 54},
    {"id": 4, "fullName": "Brenden Vaughn", "age": 25},
    {"id": 5, "fullName": "Aidan Bruce", "age": 55},
    {"id": 6, "fullName": "Anne Conrad", "age": 36},
    {"id": 7, "fullName": "September Benton", "age": 42},
    {"id": 8, "fullName": "William Miller", "age": 26},
    {"id": 9, "fullName": "Shafira Bradford", "age": 44},
    {"id": 10, "fullName": "Keely Curtis", "age": 49}
  ];

  constructor() {


  }

  ngOnInit() {
  }




}
