import { cardList } from "../enums/constants"
import Card from "./Card"

const CardContainer = () => {
    return (
        <div className="card-container">
            {cardList.map((cardObj, index)=>{
               return <Card cardData = {cardObj} key={cardObj.info.id}/>
            })}
        </div>
    )
}

export default CardContainer;