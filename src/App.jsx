import { useEffect, useState, lazy, Suspense } from 'react'
import './App.css'
import mainphoto from './assets/mainphoto.png'
import mymap from './assets/mymap.png'
import villadegd from './assets/villadegd.png'
import viteLogo from '/vite.svg'
import kakaoLogo from './assets/kakao-talk.svg'
import linkimg from './assets/link.png'
import Transport from './Transport'
import Calendar from './Calendar'
import Semititle from './Semititle'
//import Gallery from './Gallery'
import MyBank from './MyBank'
import Modal from './Modal'
import shareMessage from './kakao'
import Myinview from './Myinview'


function App() {
  const copy_link = () => {
    navigator.clipboard.writeText("https://buly.kr/4Frh3tS")
    alert("링크주소가 복사되었습니다.")
  }
  const debug = process.env.NODE_ENV === 'development'?"solid":"none";

  const Gallery = lazy(() => import('./Gallery'));
  

  const today = new Date();
  const tg_date = new Date(2025, 6, 13, 11, 30, 0);
  const [images, set_images] = useState([]);
  const [image_modal, set_image_modal] = useState({isopen:false, src:null});
  const [bank_modal, set_bank_modal] = useState({isopen:false, src:null});

  useEffect(() => {
    const temp = []
    for (let i = 0; i < 2; i++) {
      temp.push([viteLogo,viteLogo,viteLogo])
    }
    set_images(temp)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (window.Kakao) {
      const Kakao = window.Kakao
      if (!Kakao.isInitialized()) {
          Kakao.init('ca75bb8fef5f657c0751fb3a877252ee')
      }
    }
  }, [])


  

  return (
    <>
      <div className='main-frame'>
        <div style = {{border:debug}}>
          <p style = {{marginTop:"50px", marginBottom:"50px", fontSize : "20px", fontFamily : "MaruBuri"}}>
            이태우 & 안지연
          </p>
        </div>
        
        <div style = {{border:debug}}>
          <p>2025년 7월 13일 일요일 오전 11시 30분</p>
          <p>빌라드지디 논현</p>
        </div>
        
        <div style={{ position: 'relative', border: debug }}>
          <img src={mainphoto} width={"100%"} style={{ display: 'block' }} />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 30%, rgba(255, 255, 255, 0) 100%)',
            filter: 'blur(0px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 30%, rgba(255, 255, 255, 0) 100%)',
            filter: 'blur(0px)'
          }}></div>
        </div>
          
        
        <Myinview debug = {debug}>
          <Semititle>INVITATION</Semititle>
          소중한 분들을 모십니다.<br/>
          블라블라블라블라블라블라
        </Myinview>


        <Myinview debug = {debug}>
          <div style = {{marginBottom:"10px", marginTop : "20px"}}>
            <b>이종면 · 유병희</b> 의 차남 <span style = {{fontFamily:"MaruBuriBold"}}>태우</span><br/>
          </div>
          <div style = {{marginBottom:"10px", marginTop : "10px"}}>
            <b>안동열 · 조민경</b> 의 차녀 <span style = {{fontFamily:"MaruBuriBold"}}>지연</span>
          </div>
        </Myinview>

        <div style = {{border:debug, backgroundColor:"rgb(246, 245, 245)"}}>
          <p style = {{
            fontSize:"20px",
            fontFamily:"MaruBuri",
            margin:"20px"
          }}>2025. 7. 13</p>
          일요일 오전 11시 30분<br/>
          <Calendar/>
          태우 지연의 결혼식이
          <span style = {{color : "magenta"}}>
          {Math.floor((tg_date-today)/(1000*60*60*24))}
          </span>일 남았습니다.
        </div>
        

        <div style = {{border:debug}}>
          <Suspense fallback={<div>Loading...</div>}>
            {/*<div className='fade-in'>*/}
            <div>
              <Gallery
                title = "GALLERY"
                images = {images}
                set_images = {set_images}
                image_modal = {image_modal}
                set_image_modal = {set_image_modal}
              />
            </div>
          </Suspense>
        </div>


        <div style = {{border:debug}}>
          <Semititle>Location</Semititle>
          <img src = {villadegd} width={"35%"}></img><br/>
          <img src = {mymap} width={"90%"}></img><br/>
          주소 : 서울 강남구 언주로 126길 23 (논현동) 
          <br/><br/>
          <Transport
            tr_type = "bus"
          />
          <Transport
            tr_type = "car"
          />
          <Transport
            tr_type = "metro"
          />
        </div>

        <div style = {{border:debug}}>
          <p style = {{
            fontSize:"20px",
            fontFamily:"MaruBuri",
            margin:"20px"
          }}>마음 전하실 곳</p>
          <div onClick = {()=>{set_bank_modal({isopen:true, src:"M"});document.body.classList.add('modal-open')}}
            style = {{
              backgroundColor:"rgb(242,238,238)",
              padding:"12px",
              margin:"12px",
              marginLeft:"20%",
              marginRight:"20%"
            }}>신랑측 계좌번호</div>
          <div onClick = {()=>{set_bank_modal({isopen:true, src:"W"});document.body.classList.add('modal-open')}}
            style = {{
              backgroundColor:"rgb(242,238,238)",
              padding:"12px",
              margin:"12px",
              marginLeft:"20%",
              marginRight:"20%"
            }}>신부측 계좌번호</div>
        </div>

        <div style = {{border:debug}}>
          <div onClick={() => shareMessage()} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop : "40px"}}>
            <img src={kakaoLogo} width={25} style={{ marginRight: "5px" }}></img>
            카카오톡 공유하기
          </div>
          <div onClick={() => copy_link()} style={{ display: "flex", alignItems: "center", justifyContent: "center", margin : "20px" }}>
            <img src={linkimg} width={25} style={{ marginRight: "5px" }}></img>
            링크주소 복사하기
          </div>
        </div>

        <div style = {{border:debug}}>
            <p style = {{fontSize :"12px"}}>Copyright 2025. Made By TEUS.</p>
        </div>

        <Modal
          isOpen={image_modal}
          onClose={() => {set_image_modal({isopen:false, src:null});document.body.classList.remove('modal-open')}}
          mystyle = {{backgroundColor:"rgb(0, 0, 0)"}}
        >
          <div style = {{display:"flex", justifyContent:"center"}}>
            <img src={image_modal.src} width={"100%"}/>
          </div>  
        </Modal>
        
        <Modal
          isOpen={bank_modal}
          onClose={() => {set_bank_modal({isopen:false, src:null});document.body.classList.remove('modal-open')}}
          mystyle = {{backgroundColor:"rgb(255, 246, 246)"}}
        >
          <div style = {{display:"flex", justifyContent:"center"}}>
            <MyBank src = {bank_modal.src}/>
          </div>  
        </Modal>
      </div>
    </>
  )
}

export default App