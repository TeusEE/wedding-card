const Bus = ({src, user_nm, tot_num, regist_user}) => {
    return (
        <div>
            🤵먼길을 오시는 하객분들을 위해서👰<br/><br/>
            청주↔예식장 버스를 운행합니다<br/><br/>
            버스 탑승위치 : 청주 사직체육관 주차장 <br/><br/>
            버스 출발 시간 : 08:30 <br/><br/>
            버스 기사님 : 윤석민 기사님(010 9222 5400)<text onClick = {()=>{
                window.location.href = `tel:01092225400`
            }}>📞</text><br/><br/>
            버스 정보 : 충북70바1821<br/><br/>
            <div style = {{display : "flex", width : "100%"}}>
                <div style = {{width : "30%"}}>이름 : </div>
                <input style = {{width : "70%"}} type = "text" ref = {user_nm}></input>
            </div>
            <br/>
            <div style = {{display : "flex", width : "100%"}}>
                <div style = {{width : "30%"}}>총 인원 : </div>
                <input style = {{width : "70%"}} type = "number" ref = {tot_num}></input>
            </div>
            <br/>
            <button onClick={()=>regist_user()}>탑승하기✔</button>
        </div>
    )
}  

export default Bus