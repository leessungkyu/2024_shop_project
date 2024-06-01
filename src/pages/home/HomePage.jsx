import Items from "../../components/items/items"
export default function Home(){
    return(
        <div className='container'>
            <div className='items_line'>
              <Items title="컵라면" img='/img/1.jpg' id='0'/>
              <Items title="파란로켓" img='/img/blue_roket.JPG' id='1'/>
              <Items title="보라로켓" img='/img/puple_roket.JPG' id='2'/>
              <Items title="초록로켓" img='/img/green_roket.JPG' id='3'/>
            </div>
         </div>
    )
}