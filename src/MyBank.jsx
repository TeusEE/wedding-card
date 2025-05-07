import copyicon from './assets/copy.svg'
const MyBank  = ({src}) => {
    const copy_bank = (num) => {
        navigator.clipboard.writeText(num)
        alert("계좌가 복사되었습니다.")
    }

    const dt = {
        "mother" : ["조민경","신한은행", "110000748757"],
        "father" : ["안동열","농협은행", "40114752101326"],
        "me" : ["안지연","국민은행", "89090100071341"],
    }
    if (src === "M") {
        dt["mother"] = ["유병희","국민은행", "293210131434"]
        dt["father"] = ["이종면","국민은행", "165210102195"]
        dt["me"] = ["이태우","국민은행", "39280104181777"]
    } 
    return  (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        {
            ["mother", "father", "me"].map((key, idx) => {
                return <div key = {idx}
                style = {{
                    display: "flex", // 추가된 부분
                    justifyContent: "space-between", // 추가된 부분
                    alignItems: "center", // 추가된 부분
                    textAlign:"left",
                    borderRadius:"12px",
                    padding:"12px",
                    margin:"12px", 
                }}>
                    <div>
                        <p style = {{fontFamily : "MaruBuriLight", fontSize : "18px", marginTop: "0px"}}>{dt[key][0]}</p>
                        <div style = {{fontSize : "13px"}}>{dt[key][1]} {dt[key][2]}</div>
                    </div>
                    <div style = {{width : "5vw"}}></div>
                    <button
                        onClick={()=>copy_bank(dt[key][2])}
                        style = {{
                            backgroundColor : "rgb(249, 246, 242)",
                            color : "black",
                            border : "1px solid rgb(197, 219, 238)",//
                            padding : "6px",
                            borderRadius : "5px"
                        }}
                    >
                        <img src = {copyicon} width={"11px"}></img>
                        <span style = {{marginLeft : "10px", marginRight:"5px", fontSize : '11px'}}>복사</span>
                    </button>
                </div>
            })
        }
    </div>
)}

export default MyBank 