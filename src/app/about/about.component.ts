import {Component, OnInit} from '@angular/core';
import { init, destroy } from 'ityped';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit{
  ngOnInit(): void {
    let element = document.getElementById("accompany-time-once");
    this.calculate_time();
    init(element, {
      strings: [this.accompanyTime],
      typeSpeed:  88,
      startDelay: 50,
      loop:       false,
      showCursor: false,
      cursorChar: "|",
      onFinished: ()=>{this.once = false}
    });
    this.show_date_time();
  }

  public ddPortraitPath = "assets/images/portrait_dd.png";
  public ddName = "Kelly";
  public ddWord = "言之命至，人随己愿。";

  public heartPath = "assets/images/heart.png";
  public heart = "assets/images/heart.png";
  public heartBeat = "assets/images/heart_beat.png";
  public accompanyTime = "恋爱时间加载中...";
  public once = true;

  show_date_time(): void{
    window.setTimeout( ()=>{
      this.show_date_time();
    }, 1000);
    this.calculate_time();
    this.heartPath = this.heartPath == this.heart ? this.heartBeat : this.heart;
  };

  calculate_time(): void {
    let thatDay = new Date("5/11/2012 00:00:00");
    let today = new Date();
    let time = (today.getTime() - thatDay.getTime());
    let msPerDay = 24 * 60 * 60 * 1000;
    let days1 = time / msPerDay;
    let days = Math.floor(days1);
    let hours1 = (days1 - days) * 24;
    let hours = Math.floor(hours1);
    let mins1 = (hours1 - hours) * 60;
    let mins = Math.floor(mins1);
    let seconds = Math.floor((mins1 - mins) * 60);
    this.accompanyTime = days + " Days " + hours + " Hours " + mins + " Minutes " + seconds + " Seconds";
  }

  public myPortraitPath = "assets/images/portrait_lmz.png";
  public myName = "Geeook";
  public myWord = "You Only Live Once!";

  public icons = [
    {
      title: "Github",
      url: "https://github.com/LiuMengzhou",
      img: "assets/images/github.png",
      src: "assets/images/github.png",
      srcHover: "assets/images/github-clicked.png"
    },
    {
      title: "知乎",
      url: "https://www.zhihu.com/people/liu-mou-zhou/activities",
      img: "assets/images/zhihu.png",
      src: "assets/images/zhihu.png",
      srcHover: "assets/images/zhihu-clicked.png"
    },
    {
      title: "网易云",
      url: "https://music.163.com/#/user/home?id=102644593",
      img: "assets/images/music.png",
      src: "assets/images/music.png",
      srcHover: "assets/images/music-clicked.png"
    },
    {
      title: "邮箱",
      url: "mailto:geeookliu@gmail.com",
      img: "assets/images/mail.png",
      src: "assets/images/mail.png",
      srcHover: "assets/images/mail-clicked.png"
    }
  ];

  public position = "below";

  public hoverIn(icon): void {
    icon.img = icon.srcHover;
  }

  public hoverOut(icon): void {
    icon.img = icon.src;
  };

}
