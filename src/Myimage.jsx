const MyImage  = ({src, src_snap, image_modal, set_image_modal}) => {
    const open_modal = () => {
        set_image_modal({isopen : true, src : src})
    }
    return  (
        <div style = {{
            margin: "2%", 
            border: "1px solid rgb(200, 200, 255)", 
            borderRadius: "12px", 
            width: "29%", 
            height: "111.896px", 
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
        }}>
        <img onClick = {()=>{open_modal();document.body.classList.add('modal-open')}} src={src_snap} height={"100%"} width={"100%"} alt="my image"/>
    </div>
)}

export default MyImage 