import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  portraitPath = "assets/images/portrait.jpg";
  myName = "Geeook";
  description = "You Only Live Once";
  navs = [
    {title: "全部",
      url: "",
      img: "assets/images/list.png",
      src: "assets/images/list.png",
      srcHover: "assets/images/list-clicked.png"
    },
    {title: "分类",
      url: "",
      img: "assets/images/category.png",
      src: "assets/images/category.png",
      srcHover: "assets/images/category-clicked.png"
    },
    {title: "关于",
      url: "",
      img: "assets/images/about.png",
      src: "assets/images/about.png",
      srcHover: "assets/images/about-clicked.png"
    }
  ];
  position = "below";

  hoverIn = function (nav) {
    console.log(nav);
    nav.img = nav.srcHover;
  };

  hoverOut = function (nav) {
    nav.img = nav.src;
  };
}
