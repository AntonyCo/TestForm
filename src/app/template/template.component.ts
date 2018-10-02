import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  private user:User = new User('Nartawak', 'test');
  constructor() { }

  ngOnInit() {
  }

  handleSubmit(value) {
    console.log('Form value', value);
  }
  
}
