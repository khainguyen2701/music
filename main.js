
const PLAYER_STORAGE_KEY = 'KHAI';


var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const cd = $('.cd');
const cdWidth = cd.offsetWidth;
const headding = $('header h2');
const numberSongs = $('header p');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const next = $('.btn-next');
const prev = $('.btn-prev');
const random = $('.btn-random');
const repeat = $('.btn-repeat');
const playlist = $('.playlist');
const btnCheckbox = $('#btnLate');
window.onload=function(){
  btnCheckbox.checked = false;
}
const app = {
    currentIndex : 3,
    isplaying:false,
    isRandom:false,
    isRepeat:false,
    // config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)||{}),
    songs: [
        {
          name: 'Nevada',
          singer: 'Vicetone',
          path: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3?st=_IjpS9u0LjapNgzm058wVw&e=1623143773',
          image: 'https://i.pinimg.com/originals/f8/6f/33/f86f3378e656883b33594f06d78d1634.jpg',
        },
        {
          name: 'Sài gòn đau lòng quá',
          singer: 'Hứa Kim Tuyền, Hoàng Duyên',
          path: 'https://aredir.nixcdn.com/NhacCuaTui1013/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3?st=umVX1OimCK_RZoZj8p8ZXg&e=1627627081',
          image: 'https://avatar-ex-swe.nixcdn.com/song/2021/03/27/d/2/9/1/1616859493571_500.jpg',
        },
        {
          name: 'Sao ta ngược lỗi',
          singer: 'Đình Dũng',
          path: 'https://f9-stream.nixcdn.com/NhacCuaTui1018/SaoTaNguocLoi-DinhDung-7052177.mp3?st=BeP7jNk-GQHgItgukSJ-SA&e=1627659803',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/09/22/5/3/5/d/1600744344048_600.jpg',
        },
        {
          name: 'Thức giấc',
          singer: 'DA LAB',
          path: 'https://f9-stream.nixcdn.com/NhacCuaTui1018/ThucGiac-DaLAB-7048212.mp3?st=CU7UouxMkLR3D4zs-vCT5w&e=1627659887',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/03/3/f/4/5/1596425146149_600.jpg',
        },
        {
          name: 'Trắc trở',
          singer: 'X2X',
          path: 'https://f9-stream.nixcdn.com/NhacCuaTui1017/TracTro-X2X-7040184.mp3?st=Vlhm8SQa578mk1u_mFBrXA&e=1627659958',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/03/15/4/7/7/8/1615802750962_600.jpg',
        },
        {
          name: 'Có hẹn với thanh xuân',
          singer: 'Monstar',
          path: 'https://f9-stream.nixcdn.com/NhacCuaTui1018/CoHenVoiThanhXuan-MONSTAR-7050201.mp3?st=1WBUB0TPwGFOVHqXAVnyPg&e=1627660176',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2017/12/11/d/e/b/9/1512984325191_600.jpg',
        },
        {
          name: 'Từng yêu đến thế',
          singer: 'Kalee Hoàng, Huy Le',
          path: 'https://f9-stream.nixcdn.com/NhacCuaTui1018/TungYeuDenThe-KaleeHoangHuyLe-7053009.mp3?st=FBso6xQDZfmsE11boR9Cgg&e=1627660265',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/01/04/e/f/b/c/1609742824669_600.jpg',
        },
        {
          name: 'Phải chăng em đã yêu',
          singer: 'Juky San, RedT',
          path: 'https://aredir.nixcdn.com/NhacCuaTui1011/PhaiChangEmDaYeu-JukySanRedT-6940932.mp3?st=8KwUmwOI_gJ87HUx2Ei-fg&e=1627629969',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/02/17/a/3/2/1/1613561860337_600.jpg',
        },
        {
          name: 'Ghé qua',
          singer: 'Key',
          path: 'https://aredir.nixcdn.com/NhacCuaTui964/GheQua-Key-5471203.mp3?st=0R0ECzOvYGRSIKu6E4FqPw&e=1627630255',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2012/06/67562_avatar_gKL.jpg',
        },
        {
          name: 'Nắm đôi bàn tay',
          singer: 'Kay Trần',
          path: 'https://f9-stream.nixcdn.com/NhacCuaTui1017/NamDoiBanTay-KayTran-7042104.mp3?st=C43fwxV1Hit3j-xFKxAsBw&e=1627629064',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/07/05/7/5/8/a/1625467381647_600.jpg',
        },
        {
          name: 'Nàng thơ',
          singer: 'Hoàng Dũng',
          path: 'https://aredir.nixcdn.com/NhacCuaTui1001/NangTho-HoangDung-6413381.mp3?st=A5W9gpzOJOT3_qCryA3T9A&e=1627629247',
          image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/09/19/1/e/f/8/1568871085871_600.jpg',
        },
        {
          name: 'Light It Up',
          singer: 'Robin Hustin x TobiMorrow',
          path: 'https://aredir.nixcdn.com/NhacCuaTui968/LightItUp-RobinHustinTobimorrowJex-5619031.mp3?st=kzpVQ5kKnf2LlcAqM6lnxg&e=1623143881',
          image: 'https://avatar-ex-swe.nixcdn.com/song/2019/01/08/1/3/d/a/1546913843457_640.jpg',
        },
        {
          name: 'Yoru ni kakeru',
          singer: 'YOASOBI',
          path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
          image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
        },
        {
          name: 'Muộn rồi mà sao còn',
          singer: 'Sơn Tùng M-TP',
          path: 'https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=w9AA-eyRI7yD_VYGfvVWeQ&e=1623141624',
          image: 'https://pbs.twimg.com/media/Ez5jRyVVgAQN6Kh.jpg',
        },
        {
          name: 'See You Again',
          singer: 'Charlie Puth ft Wiz Khalifa',
          path: 'https://aredir.nixcdn.com/NhacCuaTui894/SeeYouAgain-KurtSchneiderEppicAlexGoot-3888930.mp3?st=1q73myBS8FKr8Rx0snpMJw&e=1623144094',
          image: 'https://nghiennhac.com/wp-content/uploads/2020/09/see-you-again-0.jpg',
        },
       
        {
          name: 'Symphony',
          singer: 'Clean Bandit',
          path: 'https://aredir.nixcdn.com/Sony_Audio37/Symphony-CleanBanditZaraLarsson-4822950.mp3?st=sPgJSXtRXYpT_rznXyez6g&e=1623144426',
          image: 'https://i.ytimg.com/vi/PIf9GvWaxQQ/maxresdefault.jpg',
        },
        {
          name: 'Waiting For Love',
          singer: 'Avicii',
          path: 'https://aredir.nixcdn.com/Unv_Audio45/WaitingForLove-Avicii-4203283.mp3?st=mXGv6kIqbxg_coAyUqzlnw&e=1623144462',
          image: 'https://i.ytimg.com/vi/Hmbm3G-Q444/maxresdefault.jpg',
        },
        {
          name: 'Alone',
          singer: 'Marshmello',
          path: 'https://aredir.nixcdn.com/NhacCuaTui927/Alone-Marshmello-4456939.mp3?st=RTsMC9tNcKEi8fd0iKtdaA&e=1623144502',
          image: 'https://i.ytimg.com/vi/UNB8F0ObA4g/maxresdefault.jpg',
        },
        {
          name: 'Something Just Like This',
          singer: 'The Chainsmokers & Coldplay',
          path: 'https://aredir.nixcdn.com/Sony_Audio39/SomethingJustLikeThis-TheChainsmokersColdplay-5337136.mp3?st=VQuH6VgNsPlBizbk-c7n3w&e=1623144556',
          image: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/07/a/1/4/5/1510038809679_640.jpg',
        },
        {
          name: 'Sugar',
          singer: 'Maroon 5',
          path: 'https://aredir.nixcdn.com/Unv_Audio73/Sugar-Maroon5-3338455.mp3?st=3FUWEyikJePPeAuREUcw9g&e=1623144644',
          image: 'https://i.ytimg.com/vi/7vw84EkHOlY/maxresdefault.jpg',
        },
      ],
      // setting:function(key, value)
      // {
      //   this.config[key] = value;
      //   localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
      // },
      render:function(){
        const htmls = this.songs.map((song, index)=>{
            return `<div class="song ${index === this.currentIndex ? 'active' : 'active2'}" data-index=${index}>
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
          </div>`
        });
        playlist.innerHTML = htmls.join('');
        
      },
      defineProperties: function()
      {
          Object.defineProperty(this,'currentSong',{
              get:function(){
                  return this.songs[this.currentIndex];
              }
          })
      },
      handleEvents: function(){
          const _this = this;
          const cdAnimate = cdThumb.animate([
            {
                transform: 'rotate(360deg)',
              },
          ],{
            duration: 10000,
            iterations: Infinity
        }); 
          cdAnimate.pause();
        //Scroll
          document.onscroll = function()
          {
              const scrollTop = window.scrollY || document.documentElement.scrollTop;
              const newCdWidth = cdWidth - scrollTop;

              cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
              cd.style.opacity = newCdWidth / cdWidth;
             
          }
          //Btn Play
          playBtn.onclick = function()
          {
              if(_this.isplaying)
              {
                audio.pause();
              }
              else{

                  audio.play();
              }
             
          }
          audio.onplay = function()
          {
              _this.isplaying = true;
              player.classList.add('playing')
              cdAnimate.play();
          }
          audio.onpause = function()
          {
              _this.isplaying = false;
              player.classList.remove('playing');
              cdAnimate.pause();
          }
          audio.ontimeupdate = function()
          {
              if(audio.duration)
              {
                  const progressPecent = Math.floor(audio.currentTime/audio.duration *100);
                  progress.value = progressPecent;
              }
          }
          progress.onchange = function(e)
          {
            const changeProgress = audio.duration/100*e.target.value;
            audio.currentTime = changeProgress;
          }
          next.onclick=function()
          {
            if(_this.isRandom)
            {
              _this.randomSong();
            }
            else{
              _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollTop();
          }
          prev.onclick=function()
          {
            if(_this.isRandom)
            {
              _this.randomSong();
            }
            else{
              _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollTop();
          }
          random.onclick = function()
          {
            _this.isRandom = !_this.isRandom
            // _this.setting('isRandom',_this.isRandom);
            random.classList.toggle('active');
           
          }
          audio.onended = function()
          {
            if(_this.isRepeat)
            {
              audio.play();
            }
            else{
              next.click();
            }
            
          }
          repeat.onclick = function(e) 
          {
            // _this.setting('isRepeat',_this.isRepeat);
            _this.isRepeat = !_this.isRepeat;
            repeat.classList.toggle('active',_this.isRepeat);
          }
          playlist.onclick=function(e)
          {
            const dataSong = e.target.closest('.song:not(.active)');
            if(dataSong)
            {
              _this.currentIndex = Number(dataSong.dataset.index);
              _this.loadCurrentSong();
              _this.render();
              audio.play();
            }
          }
          btnCheckbox.onclick = function()
          {
            document.querySelector('.dashboard').classList.toggle('active');
            document.querySelector('.player').classList.toggle('active');
            document.querySelector('.playlist').classList.toggle('active');
          }

      },
      loadCurrentSong:function()
      {
         
          headding.textContent = this.currentSong.name;
          numberSongs.textContent = 'Số bài hát' + ' ' + app.songs.length;
          cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
          audio.src = this.currentSong.path;    
      },
      nextSong:function()
      {
        this.currentIndex++;
        if(this.currentIndex>=this.songs.length)
        {
          this.currentIndex = 0;
        }
        this.loadCurrentSong();
      },
      prevSong:function()
      {
        this.currentIndex--;
        if(this.currentIndex == 0)
        {
          this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
      },
      randomSong:function()
      {
        let newIndex
        do{
          newIndex = Math.floor(Math.random() * this.songs.length);

        }while(newIndex === this.currentIndex)
        this.currentIndex = newIndex;
        this.loadCurrentSong();
      },
      scrollTop:function()
      {
        setTimeout(()=>{
          $('.song.active').scrollIntoView({
            behavior:'smooth',
            block:'nearest',
          });
        },250)
      },
      start:function(){
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
      }
}

app.start();