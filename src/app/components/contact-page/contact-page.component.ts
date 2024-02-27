import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  emailAddress = 'heysayan192@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

  // openEmail() {
  //   window.open("mailto:k.k.pareek18@gmail.com", '_blank');
  // }
}
