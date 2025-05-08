import { useEffect, useRef, useState } from "react"
const Myinview = ({ children, ...props }) => {
  const ref = useRef()
  const [intersect, setIntersect] = useState(false)
  const observer = new IntersectionObserver(([entry]) => {
      //한번이라도 관찰이 되면, Observer가 더이상 관찰하지 않도록 한다.
      if (entry.isIntersecting){
          setIntersect(true)
          observer.disconnect()
      }        
  }, { threshold: 0.3})
  //Component가 mount되면서 동시에 Observer를 추가함
  useEffect(() => {
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
        {/* 관찰이 되면 props를 전달하고, 아니면 visibility를 hidden으로 한다. */}
        <div ref={ref} {...(intersect ? {className : "fade-in"} : {style : {visibility: "hidden"}})}>
            {children}
        </div>
    </>
)
}

export default Myinview;