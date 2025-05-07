import { useEffect, useState, lazy, Suspense, useRef } from 'react'
import './App.css'
import mainphoto from './assets/mainphoto.webp'
import mymap from './assets/mymap.png'
import villadegd from './assets/villadegd.png'
import kakaoLogo from './assets/kakao-talk.svg'
import audioIcon from './assets/audio.svg'
import linkimg from './assets/link.png'
import Transport from './Transport'
import Calendar from './Calendar'
import Semititle from './Semititle'
import MyBank from './MyBank'
import Modal from './Modal'
import shareMessage from './kakao'
import Myinview from './Myinview'
import audioFile from './assets/background_music.weba'
import { collection, doc, setDoc, getDocs, query } from 'firebase/firestore';
import { db } from "./firebase";
import Bus from './Bus'

function App() {
  const copy_link = () => {
    navigator.clipboard.writeText("https://buly.kr/4Frh3tS")
    alert("링크주소가 복사되었습니다.")
  }
  const debug = process.env.NODE_ENV === 'development'?"solid":"none";

  const Gallery = lazy(() => import('./Gallery'));
  

  const today = new Date();
  const tg_date = new Date(2025, 6, 13, 11, 30, 0);
  
  const [image_modal, set_image_modal] = useState({isopen:false, src:null, src_snap:null, current_idx:null, image_tot:[]});
  const [bank_modal, set_bank_modal] = useState({isopen:false, src:null});
  const [bus_modal, set_bus_modal] = useState({isopen:false, src:null});
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const handleAudioToggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioFile);
      audioRef.current.load()
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    
    if (window.Kakao) {
      const Kakao = window.Kakao
      if (!Kakao.isInitialized()) {
          Kakao.init('ca75bb8fef5f657c0751fb3a877252ee')
      }
    }

    return () =>{
      if (audioRef.current){
        audioRef.current.pause();
        audioRef.current = null;
      }
    }
  }, [])


  const gallery_change = (left_or_right) => {
    const temp_image_modal = {...image_modal}
    if (left_or_right ==="left"){
      temp_image_modal["current_idx"] = temp_image_modal["current_idx"] - 1
    } else {
      temp_image_modal["current_idx"] = temp_image_modal["current_idx"] + 1
    }
    if (temp_image_modal["current_idx"]>11){
      temp_image_modal["current_idx"] = 0
    } else if (temp_image_modal["current_idx"]<0){
      temp_image_modal["current_idx"] = 11
    }
    set_image_modal({...temp_image_modal, src:temp_image_modal["image_tot"][temp_image_modal["current_idx"]]["src"]})
  }


  const user_nm = useRef("")
  const tot_num = useRef("")
  const regist_user = async () => {
    let _user_nm = user_nm.current.value;
    let _tot_num = tot_num.current.value;
    const bus_usage = collection(db, "Wedding_bus_usage")
    try{
      await setDoc(doc(bus_usage), {
        name:_user_nm, number : _tot_num
      })
    } catch (error) {
      alert("오류가 발생했어요...!")
    } finally {
      alert(`${_user_nm} 님 포함 ${_tot_num}명 등록 완료!`)
    }
  }

  const get_all_user = async () => {
    const bus_usage = collection(db, "Wedding_bus_usage")
    const q = query(bus_usage);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }


  return (
    <>
      <div className='main-frame'>
        <div style={{ border: debug, textAlign: 'right' }}>
          <img
            src={audioIcon} 
            width={"20px"} 
            style={{ marginRight: "10px", marginTop: "10px" }} 
            onClick={handleAudioToggle}
          />
        </div>
        <div className="fade-in" style={{ border: debug }}>
          <p style = {{marginTop:"20px", marginBottom:"50px", fontSize : "30px", fontFamily : "Ej-medium"}}>
            이태우 & 안지연
          </p>
        </div>
        
        <div className="fade-in" style={{ border: debug }}>
          <p>2025년 7월 13일 일요일 오전 11시 30분</p>
          <p>빌라드지디 논현</p>
        </div>
        
        <div className="fade-in" style={{ border: debug }}>
          <div style={{ position: 'relative', border: debug }}>
            <img src={mainphoto} width={"100%"} style={{ display: 'block' }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '22%',
              background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 30%, rgba(255, 255, 255, 0) 100%)',
              filter: 'blur(0px)'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '22%',
              background: 'linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 30%, rgba(255, 255, 255, 0) 100%)',
              filter: 'blur(0px)'
            }}></div>
          </div>
        </div>
          
        
        <Myinview debug = {debug} offset_y = "300">
          <Semititle>INVITATION</Semititle>
          <div style = {{
            margin: "20px", 
            marginLeft: "65px", 
            marginRight: "65px",
            fontSize : "17px",
          }}>
            <b>태</b>양처럼 빛나는 우리의 사랑이<br/>
            <div style = {{paddingTop : "12px"}}></div>
            <b>우</b>주 끝까지 이어지길 바라며<br/>
            <div style = {{paddingTop : "12px"}}></div>
            <b>지</b>금 이 순간, 소중한 여러분을<br/>
            <div style = {{paddingTop : "12px"}}></div>
            <b>연</b>결의 자리로 초대합니다.<br/>
          </div>
        </Myinview>


        <Myinview debug = {debug} offset_y = "450">
          <div style = {{marginBottom:"10px", marginTop : "20px"}}>
            <b>이종면 · 유병희</b> 의 차남 <span style = {{fontFamily:"MaruBuriBold"}}>태우</span><br/>
          </div>
          <div style = {{marginBottom:"10px", marginTop : "10px"}}>
            <b>안동열 · 조민경</b> 의 차녀 <span style = {{fontFamily:"MaruBuriBold"}}>지연</span>
          </div>
        </Myinview>
        
        <Myinview debug = {debug}>
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
        </Myinview>
        

        <Myinview debug = {debug}>
          <Suspense fallback={<div>Loading...</div>}>
            {/*<div className='fade-in'>*/}
            <div>
              <Gallery
                title = "GALLERY"
                image_modal = {image_modal}
                set_image_modal = {set_image_modal}
              />
            </div>
          </Suspense>
        </Myinview>


        <Myinview debug = {debug}>
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
        </Myinview>

        <Myinview debug = {debug}>
          <div onClick = {()=>{set_bus_modal({isopen:true, src:"M"});document.body.classList.add('modal-open')}}
            style = {{
              backgroundColor:"rgb(242,238,238)",
              padding:"12px",
              margin:"12px",
              marginLeft:"20%",
              marginRight:"20%",
            }}>청주◀▶서울 셔틀버스</div>
          {/*<button onClick={()=>{get_all_user()}}>get_alldb</button>*/}
        </Myinview>

        <Myinview debug = {debug}>
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
        </Myinview>


        <Myinview debug = {debug}>
          <div onClick={() => shareMessage()} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop : "40px"}}>
            <img src={kakaoLogo} width={25} style={{ marginRight: "5px" }}></img>
            카카오톡 공유하기
          </div>
          <div onClick={() => copy_link()} style={{ display: "flex", alignItems: "center", justifyContent: "center", margin : "20px" }}>
            <img src={linkimg} width={25} style={{ marginRight: "5px" }}></img>
            링크주소 복사하기
          </div>
        </Myinview>

        <div style = {{border:debug, width:"100%"}}>
            <p style = {{fontSize :"12px"}}>Copyright 2025. Made By TEUS.</p>
        </div>

        <Modal
          isOpen={image_modal}
          onClose={() => {set_image_modal({...image_modal,isopen:false, src:null});document.body.classList.remove('modal-open')}}
          mystyle = {{backgroundColor:"rgb(0, 0, 0)"}}
        >
          <div style = {{display:"flex", justifyContent:"center"}}>
            <img src={image_modal.src} width={"100%"}/>
          </div>
          <div>
            <button onClick = {()=>{gallery_change("left")}}>{"<"}</button>
            <button onClick = {()=>{gallery_change("right")}}>{">"}</button>
          </div>
        </Modal>

        <Modal
          isOpen={bus_modal}
          onClose={() => {set_bus_modal({isopen:false, src:null});document.body.classList.remove('modal-open')}}
          mystyle = {{backgroundColor:"rgb(255, 255, 255)"}}
        >
          <div style = {{display:"flex", justifyContent:"center"}}>
            <Bus src={bus_modal.src} user_nm = {user_nm} tot_num = {tot_num} regist_user = {regist_user}/>
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