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
        title: 'Secret',
        author: '茶太',
        url: 'http://m10.music.126.net/20170421140548/5d565ec3510f99eea06733267fce1063/ymusic/2011/da10/f9ec/c9db8decd5c044751d199a17586565bb.mp3',
        pic: 'http://p4.music.126.net/4gzU-pTgbwBLHwx4-CJcgw==/903798558032135.jpg',
        lrc: ''
      },
      {
        title: 'Magia「魔法少女まどか☆マギカ」より',
        author: '花たん',
        url: 'http://m10.music.126.net/20170421142139/67b21544816996946e4b738d697538a0/ymusic/1e69/8297/4e7d/68368fc15717273bf38bc3d1c060c334.mp3',
        pic: 'http://p4.music.126.net/H5F0nwIrjmF6wPOTYNZs6w==/3231464675025267.jpg',
        lrc: ''
      },
      {
        title: 'フラッシュバック',
        author: 'リリィ、さよなら',
        url: 'http://m10.music.126.net/20170421140338/5e566997891746b165858876940980ff/ymusic/e243/549f/a918/74599fc36c59707ebdf1163608a8f824.mp3',
        pic: 'http://p4.music.126.net/SL6lz7yGHXNQFbs5830Beg==/3408486048713557.jpg',
        lrc: ''
      },
      {
        title: 'Wake',
        author: 'Hillsong Young And Free',
        url: 'http://m10.music.126.net/20170421140927/9d42e20a7e5d4baa4318c6a39354189c/ymusic/a1af/c6d3/f47b/fcdf84a490e57a0895a3c94f12724820.mp3',
        pic: 'http://p3.music.126.net/AzS4n1yDi_90Yohr7kq3Zw==/2137450604418153.jpg',
        lrc: ''
      },
      {
        title: 'IF YOU',
        author: 'BIGBANG',
        url: 'http://say-something.b0.upaiyun.com/say-something/music/GIRLFRIEND.mp3',
        pic: 'http://p3.music.126.net/l-TigfvwoKBUP_LDL1XgIg==/7735064302387363.jpg',
        lrc: ''
      },
      {
        title: '晴天',
        author: '周杰伦',
        url: 'http://m10.music.126.net/20170421141519/4ce213808b5473e16c6e01cf689f07df/ymusic/5e8c/9fbd/460a/63af292aec1f060e9a1c23a8c1bbff95.mp3',
        pic: 'http://p4.music.126.net/RBNa1MGuuwhLWWC8J_Pyhg==/3242459793609734.jpg',
        lrc: ''
      },
      {
        title: 'The Nights (Original Mix)',
        author: 'Avicii',
        url: 'http://m10.music.126.net/20170421141732/8eb90305b5f37f0b83cd5b89f260f8c2/ymusic/69fc/5af3/383b/28aae196669e833c63886d41478f1842.mp3',
        pic: 'http://p3.music.126.net/6FE-03uc2xJJWcE-aKIejw==/3246857838267604.jpg',
        lrc: ''
      },
      {
        title: '',
        author: 'Avicii',
        url: 'https://drive.google.com/open?id=0BxUHfP9ceeDdWW5NMGZvbTJITlU',
        pic: 'http://p3.music.126.net/6FE-03uc2xJJWcE-aKIejw==/3246857838267604.jpg',
        lrc: ''
      },
    ]
  });
}
