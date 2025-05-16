const Transport  = ({tr_type}) => {
    var rev_tr_type = tr_type
    var contents = "";
    if (tr_type ==="bus") {
        rev_tr_type = "🚍버스"
        contents = `지선버스<br/>2011, 3129, 3412<br/> 3414, 3422, 4412, 6411<br/><br/>
간선버스<br/>141, 147, 240, 241A<br/> 241B, 301, 401, 472, 640<br/><br/>
순환버스 : 41<br/>
마을버스 : 강남08<br/>
공항버스 : 6704`
    } else if (tr_type === "metro") {
        rev_tr_type = "🚊지하철"
        contents = `7호선 강남구청역 2번 출구 7분거리 내외<br/>
(2번 출구에서 예식 당일 셔틀버스 운행)<br/>
7호선 학동역 1번 출구 10분거리 내외`
    } else if (tr_type === "car") {
        rev_tr_type = "🚘자동차"
        contents = `서울 강남구 언주로 126길 23 (논현동)`
    }
    
    return  (
    <div>
        <div style = {{fontFamily:"Ej-medium"}}>
            {rev_tr_type}로 오시는 분들
        </div>
        <div style = {{fontFamily:"Ej-demilight"}}>
            <div dangerouslySetInnerHTML={{ __html: contents }} />
        </div>
        <br/>
    </div>
)}

export default Transport 