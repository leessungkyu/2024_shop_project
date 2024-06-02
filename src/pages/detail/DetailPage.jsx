import "./DetailPage.css"
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarScore from "../../components/StarScore/StarScore";
import CustomImageMagnifier from "../../components/CustomImageMagnifier/CustomImageMagnifier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import PriceInfo from "../../components/PriceInfo/Priceinfo";
import RadioGroup from "../../components/Radio/RadioGroup";
import Radio from "../../components/Radio/Radio";




export default function DetailPage(props){
    //url 파라미터 가져오기
    
     let {id} = useParams();
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

    //가격정보 팝업
    const [priceinfo, setPriceinfo] = useState(false);

    const handleClick = () => {
        setPriceinfo(!priceinfo);
    }

    const modalClose = () => {
        setPriceinfo(false);
    }

    const [toggle, setToggle] = useState(false);
    const toggleClick = (e) => {
        setToggle(!toggle);        
    }
    return(
        <>
        <div className="detail-container">
                                        {
                            priceinfo && <PriceInfo onclose={modalClose}/> 
                            }
            <div className="detail-div">  
                <div className="detail-div-1">
                    <CustomImageMagnifier src={`/img/${id}.jpg`} zoom={3} />
                    {/* <img src="/img/1.jpg" className="detail-img"/> */}
                </div>
                <div className="detail-div-2">            
                
                    <div className="detail-title">오뚜기 농심 삼양 용기컵라면 12개입 세트(진매+참깨+열+김치면+신라면+육개장+튀김우동+새우탕+삼양라면+불닭볶음+까르보불닭+간짬뽕)세트</div>
                    <div className="detail-price">
                        <div className="detail-price-halin">
                            30% <span className="detail-price-line">54,000원</span> &nbsp; 
                            <FontAwesomeIcon 
                                icon    ={faCircleExclamation} 
                                onClick =    {handleClick}
                            />

                        </div>
                        <div>20,000원</div>
                    </div>
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
                    <div className="detail-div-3">
                        <div>더 많은 옵션 보기</div>
                        <div className="detail-delivery">
                            배송비 포함&nbsp;&nbsp; 
                            <div className={`toggle-btn-container ${toggle ? "toggle-btn-on": "toggle-btn-off"}`}
                                  onClick={toggleClick}  
                            >
                                <div className="toggle-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <RadioGroup label="배송">
                            <Radio name="contact" value="1" defaultChecked>1</Radio>
                            <Radio name="contact" value="2" defaultChecked>2</Radio>
                        </RadioGroup>
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
                        <button className="whiteBtn wd100Btn"><Link to={"/contact/inquiry"}>문의하기</Link></button>
                    </div>
                </div> 
                <hr/>
            </div>   
        </div>
        </>
    )
}
