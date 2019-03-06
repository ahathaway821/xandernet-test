import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'ro-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {
  phone = '614-783-5229';
  email = 'ahathaway821@gmail.com'
  linkedin_url='https://www.linkedin.com/in/alexander-hathaway-88591688/';
  github_url='https://github.com/ahathaway821'

  constructor() { }

  ngOnInit() {
  }
}
