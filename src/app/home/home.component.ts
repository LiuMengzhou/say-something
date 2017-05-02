import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public portraitPath = "assets/images/portrait.jpg";
  public ourName = "Kelly & Geeook";

  public navs = [
    {
      title: "全部",
      url: "/essays",
      img: "assets/images/list.png",
      src: "assets/images/list.png",
      srcHover: "assets/images/list-clicked.png"
    },
    {
      title: "分类",
      url: "/category",
      img: "assets/images/category.png",
      src: "assets/images/category.png",
      srcHover: "assets/images/category-clicked.png"
    },
    {
      title: "关于",
      url: "/about",
      img: "assets/images/about.png",
      src: "assets/images/about.png",
      srcHover: "assets/images/about-clicked.png"
    }
  ];

  public position = "below";

  public hoverIn(nav): void {
    nav.img = nav.srcHover;
  }

  public hoverOut(nav): void {
    nav.img = nav.src;
  };
}
