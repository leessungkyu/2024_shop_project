import { Link, Outlet } from "react-router-dom";
import "./ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage(){
    return(
        <div className="contact_div">
            <div className="contact-container">
                <h1>고객센터</h1>
                <div className="inputSearch-container">
                    <input className="inputSearch" placeholder="자주 묻는 질문 검색"/>
                    <button className="inputBtn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <Link className="blueBtn wd200Btn"><img src="/img/2.jpg"/>채팅상담하기</Link>
            </div>
            <div className="contact1-container">
                <div className="contact1-nav">
                    <div>
                      <Link to={"/contact/inquiry"}>문의내역</Link>
                    </div>
                    <div>
                      <Link to={"/contact/faq"}>자주묻는 질문</Link>
                    </div>
                </div>
                <div>
                    <a>환불안내</a>
                    <a>아이디/비밀번호 찾기</a>
                </div>
            </div>
            <Outlet />
        </div>
    )
}