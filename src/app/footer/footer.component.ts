import { Component, OnInit } from '@angular/core';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright=faCopyright;
  facebook=faFacebook;
  twitter=faTwitter;
  github=faGithub;
  instagram=faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
