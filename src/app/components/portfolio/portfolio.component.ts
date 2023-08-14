import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Portfolio } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  cards: Portfolio[] = [
    {
      name: "ecommerce",
      type: "Full Stack (Angular + ASP.NET Web Api)",
      github: "https://github.com/xiaomeng831/E-commerce_Web",
      techStack: "C#, .NET, TypeScript, Angular, SQL Server, Azure",
      webLink: "https://www.bradyxuxxm.com/",
      picUrl: [
        "../../../assets/img/projects/ecommerce/ecommerce1.png",
        "../../../assets/img/projects/ecommerce/ecommerce2.png",
        "../../../assets/img/projects/ecommerce/ecommerce3.png"
      ],
      descripotion: "This is a full stack e-commerce application. The front end is built with TypeScript, Angular, HTML, SCSS and Bootstrap. The back end is built with C#, ASP.NET WebApi and EF core. The entire project is deployed in a docker container on Linux OS and use Apache2 to do reverse proxy."
    },
    {
      name: "Book Sotre",
      type: "Full Stack (ASP.NET MVC)",
      github: "https://github.com/xiaomeng831/BookStoreWeb",
      techStack: "C#, .NET, SQL Server, Azure",
      webLink: "https://bookstoreweb.azurewebsites.net/",
      picUrl: [
        "../../../assets/img/projects/bookStore/bookstore1.png",
        "../../../assets/img/projects/bookStore/bookstore2.png",
        "../../../assets/img/projects/bookStore/bookstore3.png"
      ],
      descripotion: "This is a full stack application, which is built with ASP.NET MVC and is deployed on Azure. Customer users can search products, place an order, do a payment with stripe etc. Admin users can manage products, product types, update delivery tracking information etc."
    },
    {
      name: "Video Game Library",
      type: "Front End (Angular)",
      github: "https://github.com/xiaomeng831/video-game-library",
      techStack: "TypeScript, Angular, HTML, SCSS, Vercel",
      webLink: "https://video-game-library-vercel.vercel.app/",
      picUrl: [
        "../../../assets/img/projects/videoGame/videogame1.png",
        "../../../assets/img/projects/videoGame/videogame2.png",
        "../../../assets/img/projects/videoGame/videogame3.png",
      ],
      descripotion: "This is an Angular Front End project. Main features include displaying information of some video games by calling rawg-api(https://rawg.io/apidocs) and searching a video game and check out its details."
    },
    {
      name: "AI Image Generator",
      type: "Full Stack (MERN)",
      github: "https://github.com/xiaomeng831/AI-Image-Generator",
      techStack: "MongoDB, Express, React, Node, JavaScript",
      webLink: "https://ai-image-generator-xiaomeng831.vercel.app/",
      picUrl: [
        "../../../assets/img/projects/aiImage/AI1.png",
        "../../../assets/img/projects/aiImage/AI2.png",
        "../../../assets/img/projects/aiImage/AI3.png"
      ],
      descripotion: "This is a full stack application that mimics DALL-E, which is built with MongoDB, Express.js, React.js and Node.js. The back end server will call OpenAI API to let AI generate pictures when user use this app."
    },
    {
      name: "My Portfolio",
      type: "Front End (Angular)",
      github: "https://github.com/xiaomeng831/my-portfolio",
      techStack: "TypeScript, Angular, HTML, SCSS, Vercel",
      webLink: "https://bradyxuportfolio.vercel.app/",
      picUrl: [
        "../../../assets/img/projects/myPortfolio/portfolio1.png",
        "../../../assets/img/projects/myPortfolio/portfolio2.png",
        "../../../assets/img/projects/myPortfolio/portfolio3.png",
      ],
      descripotion: "This is my portfolio website. It's built with TypeScript, Angular, HTML, SCSS and deployed on Vercel platform. You could click the links above to check out the github repository or demo website."
    },
    {
      name: "Problem Solving",
      type: "Problem Solving",
      github: "https://github.com/xiaomeng831/MarkdownToHTML",
      techStack: "C#, .NET",
      webLink: "null",
      picUrl: [
        "../../../assets/img/projects/problemSloving/problemSloving1.png",
        "../../../assets/img/projects/problemSloving/problemSloving2.png",
        "../../../assets/img/projects/problemSloving/problemSloving3.png"
      ],
      descripotion: "This is a problem solving case. The middleware can be applied in ASP.NET applications to transform the markdown to HTML."
    }
  ];
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg')
  }
}
