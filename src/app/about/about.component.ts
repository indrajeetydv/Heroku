import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const typed = new Typed(".typing-2", {
      strings: ["Developer", "Blogger", "Designer", "Trainer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    //const FileSaver = require('file-saver');
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
