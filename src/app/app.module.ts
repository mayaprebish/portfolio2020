import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParallaxDirective } from './parallax.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { CloudComponent } from './cloud/cloud.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, AppRoutingModule ],
  declarations: [ AppComponent, ParallaxDirective, AboutComponent, ContactComponent, CloudComponent, ResumeComponent, HeaderComponent, NavComponent, ExperienceComponent, ProjectsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }