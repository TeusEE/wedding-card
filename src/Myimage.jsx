const MyImage  = ({src, image_modal, set_image_modal}) => {
    const open_modal = () => {
        set_image_modal({isopen : true, src : src})
    }
    return  (
    <div style = {{margin : "2%", border:"1px solid rgb(230, 224, 255)", borderRadius:"12px", width:"29%", height:"111.896px", overflow:"hidden"}}>
        <img onClick = {()=>{open_modal();document.body.classList.add('modal-open')}} src={src} height={"100%"} width={"100%"} alt="my image"/>
    </div>
)}

export default MyImage 