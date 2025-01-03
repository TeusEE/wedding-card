const MyImage  = ({src, image_modal, set_image_modal}) => {
    const open_modal = () => {
        set_image_modal({isopen : true, src : src})
    }
    return  (
    <div style = {{margin : "12px"}}>
        <img onClick = {()=>open_modal()} src={src} alt="my image" height={120} width={120}/>
    </div>
)}

export default MyImage 