import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  name: string ='';
  email: string ='';
  message: string = '';

  sendEmail() {
    const subject = "Let's Work Together";
    const body = `${this.message}\n\nname: ${this.name}\nemail: ${this.email}`;
    const mailtoLink = `mailto:bradyxu831@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}