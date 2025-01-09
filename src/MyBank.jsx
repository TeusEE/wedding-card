const MyBank  = ({src}) => {
    const copy_bank = (num) => {
        navigator.clipboard.writeText(num)
        alert("계좌가 복사되었습니다.")
    }

    const dt = {
        "mother" : ["조민경","국민은행", "11111111111111"],
        "father" : ["안동열","신한은행", "22222222222222"],
        "me" : ["안지연","수협은행", "33333333333333"],
    }
    if (src === "M") {
        dt["mother"] = ["유병희","국민은행", "11111111111111"]
        dt["father"] = ["이종면","신한은행", "22222222222222"]
        dt["me"] = ["이태우","국민은행", "39280104181777"]
    } 
    return  (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        {
            ["mother", "father", "me"].map((key, idx) => {
                return <div key = {idx} onClick={()=>copy_bank(dt[key][2])}
                style = {{
                    border:"1px solid black",
                    borderRadius:"12px",
                    padding:"12px",
                    margin:"12px", 
                }}>
                    {dt[key][0]}<br/>
                    {dt[key][1]} {dt[key][2]}
                </div>
            })
        }
    </div>
)}

export default MyBank 