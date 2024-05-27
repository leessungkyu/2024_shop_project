import "./DetailPage.css"
import { useState } from "react";
import { useParams } from "react-router-dom";


export default function DetailPage(props){
    //url 파라미터 가져오기
    
    // let {id} = useParams();
    // let selecteItem = props.item.find((e)=>{
    //     return e.id == id
    // });
    let [count,setCount] = useState(1);
    let [score,setScore] = useState([false, false, false, false, false]);

    const scoreArray = [0, 1, 2, 3, 4];
    let maxcount = 100;
    let mincount = 1;
    


    const handleChage = (event) => {
        let cnt = event.target.value;
        if(cnt < 0){
            setCount(mincount);
        } else if (cnt > 100){
            setCount(maxcount);
        } else if(cnt === ''){
            setCount(mincount);
        } else {
            setCount(cnt);
        }
    }

    return(
        <div className="detail-container">
            <div className="detail-div">  
                <div className="detail-div-1">
                    <img src="/img/1.jpg" className="detail-img"/>
                </div>
                <div className="detail-div-2">
                    <div className="detail-title">오뚜기 농심 삼양 용기컵라면 12개입 세트(진매+참깨+열+김치면+신라면+육개장+튀김우동+새우탕+삼양라면+불닭볶음+까르보불닭+간짬뽕)세트</div>
                    <hr/>
                    <div className="detail-price">20,000원</div>
                    <div className="detail-count">
                        <span>수량 : </span>  
                        <input type="number"  
                               id="quantity" 
                               name="quantity" 
                               min={mincount} max={maxcount} 
                               value={count}
                               onChange={handleChage}
                        />
                    </div>
                    <div className="detail-button">
                        <button className="detail-button1">장바구니 담기</button>
                        <button className="detail-button2">바로구매</button>
                    </div>

                </div>
            </div>
            <div>
                <p>제품평가</p>
                <div>
                    {scoreArray.map((item, idx)=>{

                    })}
                </div>
            </div>
        </div>
    )
}