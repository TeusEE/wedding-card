import { useEffect, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyImage from './Myimage'
import ReactModal from 'react-modal'


function App() {
  const copy_link = () => {
    navigator.clipboard.writeText("https://teusee.github.io/")
    alert("링크주소가 복사되었습니다.")
  }
  const today = new Date();
  const tg_date = new Date(2025, 7, 13, 11, 30, 0);
  const [images, set_images] = useState([]);
  const [isflip, set_isfliep] = useState(true);
  const [image_modal, set_image_modal] = useState({isopen:false, src:null});

  useEffect(() => {
    const temp = []
    for (let i = 0; i < 2; i++) {
      temp.push([viteLogo,viteLogo,viteLogo])
    }
    set_images(temp)
  }, [])

  const flip_gallery = () => {
    const temp = []
    if (!isflip) {
      var row_cnt = 2
    } else {
      var row_cnt = 6
    }
    for (let i = 0; i < row_cnt; i++) {
      temp.push([viteLogo,viteLogo,viteLogo])
    }
    set_images(temp)
    set_isfliep(!isflip)
  }

  return (
    <>
      <div className='main-frame'>
        <div style = {{border:"solid"}}>
          이태우 & 안지연
        </div>
        
        <div style = {{border:"solid"}}>
          2025년 7월 13일 일요일 오전 11시 30분<br/>
          빌라드지디 논현
        </div>
        
        <div style = {{border:"solid"}}>
          image가 들어갈 예정어어어어어<img src={reactLogo}></img>
        </div>


        <div style = {{border:"solid"}}>
          Invitiaion<br/>
          소중한 분들을 모십니다.<br/>

          블라블라블라블라블라블라
        </div>

        <div style = {{border:"solid"}}>
          이종면 유병희 의 차남 태우<br/>
          안XX 조민경 의 차녀 지연
        </div>

        <div>연락하기</div>

        <div style = {{border:"solid"}}>
          2025. 7. 13
          <br/>일요일 오전 11시 30분<br/>

          태우 지연의 결혼식이 {Math.floor((tg_date-today)/(1000*60*60*24))}일 남았습니다.
        </div>

        <div style = {{border:"solid"}}>
          사진 갤러리<br/>
          {
            [images].map((v, i) => {
              return (
               v.map((v2, i2)=>{
                return (
                  <div style = {{display:"flex"}}>
                    {
                      [0, 1, 2].map((v3, i3) => {
                      return (
                        <MyImage src={v2[v3]} image_modal = {image_modal} set_image_modal={set_image_modal}/>
                      )
                      })
                    }
                  </div>
                  )
               }) 
              )
            })
          }
          <button onClick={()=>flip_gallery()}>{isflip?"더보기":"접기"}</button>
          <button onClick={()=>set_image_modal({isopen:true, src:null})}>modal test</button>
        </div>


        <div>
          오시는길 약도
          지도
        </div>

        <div>
          카카오톡 공유하기
          <button onClick={()=>copy_link()}>
            링크주소 복사하기
          </button>
        </div>
        <ReactModal
          isOpen={image_modal.isopen}
          onRequestClose={() => set_image_modal({ ...image_modal, isopen: false })}
          shouldCloseOnOverlayClick={true}
          style = {{content : {width:"50%", height:"50%", margin:"auto"}}}
        >
          <div>
            <img src={image_modal.src}/>
          </div>
        </ReactModal>
      </div>
    </>
  )
}

export default App
