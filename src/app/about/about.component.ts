import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit{
  ngOnInit(): void {
    this.show_date_time();
  }

  private ddPortraitPath = "assets/images/portrait_dd.png";
  private ddName = "Kelly";
  private ddWord = "言之命至，人随己愿。";


  private heartPath = "assets/images/heart.png";
  private heart = "assets/images/heart.png";
  private heartBeat = "assets/images/heart_beat.png";

  private accompanyTime = "loading...";
  show_date_time(): void{
    window.setTimeout( ()=>{
      this.show_date_time();
    }, 1000);
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
    this.heartPath = this.heartPath == this.heart ? this.heartBeat : this.heart;
  };

  private myPortraitPath = "assets/images/portrait_lmz.png";
  private myName = "Geeook";
  private myWord = "You Only Live Once!";
}
