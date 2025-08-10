import { cardList } from "../enums/constants"
import Card from "./Card"
import { useState } from "react"

const CardContainer = () => {
    const [listOfRes, setListOfRes] = useState(cardList)
    return (
        <div>
            <button onClick={()=>{
                const filteredList = cardList.filter(
                    (res)=>res.info.avgRating > 4.5
                )
                setListOfRes(filteredList);
            }}>Top rated restaurancts</button>
            <div className="card-container">
            {listOfRes.map((cardObj, index)=>{
               return <Card cardData = {cardObj} key={cardObj.info.id}/>
            })}
        </div>
        </div>
        
    )
}

export default CardContainer;