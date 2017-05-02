import { Component } from '@angular/core';
import APlayer from 'aplayer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ap = new APlayer({
    element: document.getElementById('player'),
    narrow: false,
    autoplay: true,
    showlrc: 3,
    mutex: true,
    theme: '#ff9999',
    mode: 'random',
    preload : 'none',
    listmaxheight: '100px',
    music: [
      {
        title: 'Beautiful In White (Demo)',
        author: 'Shane Filan',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/beautifulinwhite.mp3',
        pic: 'http://p1.music.126.net/1ZBkErdQ19r-KCPb8HnCKg==/922490255756795.jpg',
        lrc: ''
      },
      {
        title: 'Booty Music',
        author: 'Deep Side',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/bootymusic.mp3',
        pic: 'http://p1.music.126.net/5SNTMoXZtszPWHxwU2ZOHg==/829031767396128.jpg',
        lrc: ''
      },
      {
        title: 'GIRLFRIEND',
        author: 'BIGBANG(빅뱅)',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/girlfriend.mp3',
        pic: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000002rGXEg1Hfvbm.jpg?max_age=2592000',
        lrc: ''
      },
      {
        title: 'Glad You Came',
        author: 'The Wanted',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/gladyoucame.mp3',
        pic: 'http://p3.music.126.net/kvGVP0s1vxQLldHf9DXNFA==/3375500697907201.jpg',
        lrc: ''
      },
      {
        title: 'Luv Letter',
        author: 'DJ OKAWARI',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/luvletter.mp3',
        pic: 'http://p4.music.126.net/YXY1vPG5rtdV7w_cWDnNWw==/884007348732141.jpg',
        lrc: ''
      },
      {
        title: '晴天',
        author: '周杰伦',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/sunny.mp3',
        pic: 'http://p4.music.126.net/RBNa1MGuuwhLWWC8J_Pyhg==/3242459793609734.jpg',
        lrc: ''
      },
      {
        title: 'You Belong With Me',
        author: 'Taylor Swift',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/youbelongwithme.mp3',
        pic: 'http://p1.music.126.net/uxMMgCq97A3z41dSOynb5w==/7945071024087485.jpg',
        lrc: ''
      },
      {
        title: '소년이여',
        author: 'G-Dragon',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/소년이여.mp3',
        pic: 'http://p1.music.126.net/5BdnSRhKuy8oNa6oH4UHzw==/798245441810786.jpg',
        lrc: ''
      }
    ]
  });
}
