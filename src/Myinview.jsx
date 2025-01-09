import { InView } from "react-intersection-observer";

const Myinview = ({children, debug}) => {
    return (
        <InView>
        {
        ({ inView, ref, entry }) => (
          <div ref={ref}>
            {inView &&
            <div className = "fade-in" style = {{border:debug}}>
                {children}
            </div>
            }
          </div>
        )
        }
        </InView>
    )
}

export default Myinview