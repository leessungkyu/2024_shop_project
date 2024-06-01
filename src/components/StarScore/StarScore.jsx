import { FaStar } from "react-icons/fa";
import "./StarScore.css";
import { useState } from "react";

export default function StarScore(props) {
    const scoreArray = [0, 1, 2, 3, 4];
    let [score,setScore] = useState(-1);
    return (
      <div>
        {    
          scoreArray.map((item, idx) => {
                function handleOnclick(item) {
                    console.log(item);
                    setScore(item);    
                }
                return (
                    <FaStar key={item} 
                       className={ item <= score ? 'star-active': 'star-inactive' }
                       onClick={()=>{handleOnclick(item)}}
                       size={'30px'}
                    />
                )
          })
        }
      </div>
    );
  }