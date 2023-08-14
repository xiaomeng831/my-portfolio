import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Portfolio } from '../portfolio/portfolio';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent {
  @Input() portfolio:Portfolio;


  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {    
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg')
  }
}
