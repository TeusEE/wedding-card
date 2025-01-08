import { useState } from "react";
import Semititle from "./Semititle"
import viteLogo from '/vite.svg'
import MyImage from './Myimage'

const Gallery  = ({title, images, set_images, image_modal, set_image_modal}) => {
    const [isflip, set_isfliep] = useState(true);
    
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
    return  (
    <>
    <Semititle>{title}</Semititle>
        {
        [images].map((v, i) => {
            return (
            v.map((v2, i2)=>{
            return (
                <div key = {i*100+i2*10} style = {{display:"flex"}}>
                {
                    [0, 1, 2].map((v3, i3) => {
                    return (
                    <MyImage key = {i*100+i2*10+i3} src={v2[v3]} image_modal = {image_modal} set_image_modal={set_image_modal}/>
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
    </>
)}

export default Gallery 