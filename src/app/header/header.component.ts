import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bar=faBars;
  angleUp=faAngleUp;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    const typed = new Typed(".typing", {
      strings: ["Developer", "Blogger", "Designer", "Trainer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let navBarElement = document.querySelector('.navbar') as HTMLElement;
    let scrollUpBtnElement = document.querySelector('.scroll-up-btn') as HTMLElement;
    //window.pageYOffset > element.clientHeight
    if (window.pageYOffset > 20) {
      navBarElement.classList.add('sticky');
    } else {
      navBarElement.classList.remove('sticky');
    }
    // scroll-up button show/hide script
    //window.pageYOffset > 500
    if(window.pageYOffset > 500){
      scrollUpBtnElement.classList.add("show");
    }else{
      scrollUpBtnElement.classList.remove("show");
    }
  }

  scrollToTop() {
    (function smoothscroll() {

      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }

    })();
  }

  //define the toogle property
  toggle : boolean = false;

  toggleActive(){
    //if you just want to toggle the class; change toggle variable.
    this.toggle = !this.toggle;  
  }
  
  disableToggleActive(){
    this.toggle = !this.toggle;
  }

  scrollSmooth(){
    this.toggle=false;
    let navBarElement = document.querySelector('.navbar .menu li a') as HTMLElement;
    navBarElement.scroll({behavior: "smooth"});
  }
}
