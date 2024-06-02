import "./Priceinfo.css"

export default function PriceInfo({onclose}){
	return(
		<div className="detail-priceinfo-full" 
         onClick={(e)=>{
						if (e.target.className === "detail-priceinfo-full") {
							onclose();
						}
				 }}>
			<div className="detail-priceinfo">
				<div>
						가격안내
						<span className='close-modal-icon' onClick={onclose}>&times;</span>
				</div> 
				<div>
						<div>30% 27,200원</div>
						<div>
							<div>	
								업체의 권장소비자가 또는 공식 판매처 판매가 또는 도서 정가(도서 정가제 대상인 경우)입니다. 해당 가격이 없는 경우 90일 내 쿠팡에서 판매된 가격 중 가장 높은 가격을 표시합니다.
							</div>
							<div>
								*할인율은 배송비를 제외한 상품 가격을 기준으로 적용됩니다.
							</div>
						</div>
				</div>
			</div>		      
		</div> 		
	)
}