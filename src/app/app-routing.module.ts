import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
 /* { 
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'resume',
  component: ResumeComponent
},
{
  path: 'books',
  component: BookComponent
},
{
  path: 'contact',
  component: ContactComponent
} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
