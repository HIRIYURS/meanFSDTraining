import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //My Functions
  isValidAge(Age) {
    // Simulate as if doing a real validation for Age
    if (Age > 1) {
      return 1;
    } else {
      return 0;
    }
  }  
}
