import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/animationInput';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeAnimation]
})
export class ContactComponent implements OnInit {
  apiUrl = 'https://api.staticforms.xyz/submit';
  accessKey = '583e11ac-bcca-44d4-be9b-c5a29332aa2f';
  afterSubmitRedirecTo = 'https://portfolio-jakki.netlify.app/';
  myEmail = "jackcielfelix.dev@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
