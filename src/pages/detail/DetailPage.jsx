import "./DetailPage.css"
import { useCallback, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import StarScore from "../../components/StarScore/StarScore";
import CustomImageMagnifier from "../../components/CustomImageMagnifier/CustomImageMagnifier";



export default function DetailPage(props){
    //url 파라미터 가져오기
    
     let {id} = useParams();
     console.log({id})
    //  let selecteItem = props.item.find((e)=>{
    //      return e.id == id
    //  });
    let [count,setCount] = useState(1);
    let maxcount = 100;
    let mincount = 1;

    // 수량핸들 
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
                    <CustomImageMagnifier src={`/img/${id}.jpg`} zoom={3} />
                    {/* <img src="/img/1.jpg" className="detail-img"/> */}
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
                        <button className="whiteBtn wd200Btn">장바구니 담기</button>
                        <button className="blueBtn wd200Btn">바로구매</button>
                    </div>

                </div>
            </div>
            <div>
                <hr/>
                <div className="productScore">
                    <p>제품평가</p>
                    <StarScore />
                </div>
            </div>
            <br/>
            <br/>
            <div className="productReq">
                <div className="productReq-top">
                    <div>
                        <p>상품문의</p>
                        <ul>
                            <li>구매한 상품의 <span className="boldFont">취소/반품은 마이 구매내역에서 신청</span> 가능합니다.</li>
                            <li>상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</li>
                            <li><span className="boldFont">가격,판매자,교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1문의하기</span>를 이용해주세요.</li>
                            <li><span className="boldFont">"해당 상품 자체"와 관계없는 글,양도,광고성,욕설,비방,도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다.</span></li>
                            <li>공개 게시판이믈 전화번호,메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</li>
                        </ul>
                    </div>
                    <div>
                        <button className="whiteBtn wd100Btn">문의하기</button>
                    </div>
                </div> 
                <hr/>
            </div>   
        </div>
    )
}
