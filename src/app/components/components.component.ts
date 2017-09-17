import {Component, OnInit} from "@angular/core";
import {Person} from "./Person";
import {Localization} from "./Localization";
import {OrderByPipe} from "./orderby.pipe";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./User";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})

export class ComponentsComponent implements OnInit {

  isDesc: boolean = false;
  column: string = 'city';
  direction: number;
  showDialog = false;
  user: FormGroup;
  isFormVisible = true;

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      location: new FormControl('', [Validators.required]),
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (valid) this.isFormVisible = false;
  }

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

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

  localizationArray: Localization[] =
    [
      {"city": "Redcliffe", "street": "2752 Phasellus St.", "postal": "1676"},
      {"city": "Wilmont", "street": "199-2673 Lorem Rd.", "postal": "252899"},
      {"city": "Eugene", "street": "Ap #825-9130 Consectetuer Ave", "postal": "75662-357"},
      {"city": "Rio Saliceto", "street": "P.O. Box 477, 1905 Egestas. St.", "postal": "0672"},
      {"city": "Ferness", "street": "2841 Nisi St.", "postal": "65177-041"},
      {"city": "Berwick", "street": "1646 Bibendum Rd.", "postal": "37765"},
      {"city": "Retford", "street": "2968 Litora St.", "postal": "73642"},
    ];

  constructor(private datePipe: OrderByPipe) {
  }

}
