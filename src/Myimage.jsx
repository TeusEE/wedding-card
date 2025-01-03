const MyImage  = ({src, image_modal, set_image_modal}) => {
    console.log(image_modal, src)
    const open_modal = () => {
        set_image_modal({src})
    }
    return  (
    <div style = {{margin : "12px"}}>
        <img src={src} alt="my image" height={120} width={120}/>
    </div>
)}

export default MyImage