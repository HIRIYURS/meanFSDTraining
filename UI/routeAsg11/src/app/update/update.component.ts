import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //My Functions
  isValidEmployee(name) {
    // Simulate as if doing a real check if Employee exists
    if (name == "Name1") {
      return 1;
    } else {
      return 0;
    }
  }
}
