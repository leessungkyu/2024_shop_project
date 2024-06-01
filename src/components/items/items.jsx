import { NavLink } from "react-router-dom";
import "./items.css";

export default function Items(props){
    return(
        <div className="line">
            <NavLink to={`/detail/${props.id}`}>
            <img src={props.img} className="item_img"/>
            <br/>
            <p>상품명: {props.title}</p>
            </NavLink>
        </div>
    )
}