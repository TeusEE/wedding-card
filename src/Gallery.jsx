import { useEffect, useState } from "react";
import Semititle from "./Semititle"
import viteLogo from '/vite.svg'
import MyImage from './Myimage'
const imagePaths = import.meta.glob('./assets/images/*.{png,jpg,jpeg,svg,webp}');
const imagePaths_snap = import.meta.glob('./assets/images_snap/*.{png,jpg,jpeg,svg,webp}');

const Gallery  = ({title, image_modal, set_image_modal}) => {
    const [isflip, set_isfliep] = useState(true);
    const [images, set_images] = useState([]);
    const [all_images, set_all_images] = useState([]);
    useEffect(()=>{
      const loadImages = async () => {
        const imagePromises = Object.entries(imagePaths).map(([path, importImage]) =>
          importImage().then((module) => ({ path, src: module.default }))
        );
        const loadedImages = await Promise.all(imagePromises);
        loadedImages.sort((a, b)=>{
          let _a = a.path.split("/")
          let _b = b.path.split("/")
          _a = _a[_a.length-1].split(".")[0]
          _b = _b[_b.length-1].split(".")[0]
          return parseInt(_a) - parseInt(_b)
        })
        set_image_modal({...image_modal, image_tot:[...loadedImages]})

        const image_snapPromises = Object.entries(imagePaths_snap).map(([path, importImage]) =>
          importImage().then((module) => ({ path, src: module.default }))
        );
        const loadedImages_snap = await Promise.all(image_snapPromises);
        loadedImages_snap.sort((a, b)=>{
          let _a = a.path.split("/")
          let _b = b.path.split("/")
          _a = _a[_a.length-1].split(".")[0]
          _b = _b[_b.length-1].split(".")[0]
          return parseInt(_a) - parseInt(_b)
        })
        
        const image_final = loadedImages.map((v, i)=>([v, loadedImages_snap[i]]))
        const temp = []
        for (let i = 0; i < parseInt(Object.entries(imagePaths).length/3); i++) {
          temp.push(image_final.slice(i*3, (i+1)*3))
        }
        set_images(temp.slice(0, 2));
        set_all_images(temp)
      }
      loadImages();
    } ,[])

    const flip_gallery = () => {
        const row_cnt = isflip ? parseInt(Object.entries(imagePaths).length/3) : 2;
        set_images([...all_images].slice(0, row_cnt))
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
                  [...Array(3).keys()].map((v3, i3) => {
                  return (
                    <MyImage idx={i2*3+i3} key = {v2[v3][0].path} src={v2[v3][0].src} src_snap = {v2[v3][1].src} image_modal = {image_modal} set_image_modal={set_image_modal}/>
                  )
                  })
              }
              </div>
              )
          }) 
          )
      })
      }
      <div
        onClick={() => {flip_gallery()}}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop : "5px",
          marginBottom : "20px",
        }}
      >
        {isflip?"더보기":"접기"}
      </div>
    </>
)}

export default Gallery 