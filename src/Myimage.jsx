const MyImage  = ({src, image_modal, set_image_modal}) => {
    const open_modal = () => {
        set_image_modal({isopen : true, src : src})
    }
    return  (
    <div style = {{margin : "2%", border:"1px solid black", borderRadius:"12px", width:"29%", height:"120px"}}>
        {/*<img onClick = {()=>open_modal()} src={src} alt="my image" height={120} width={120}/>*/}
        <img onClick = {()=>open_modal()} src={src} height={"100%"} width={"100%"} alt="my image"/>
    </div>
)}

export default MyImage 