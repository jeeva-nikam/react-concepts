import { cardList } from "../enums/constants"
import Card from "./Card"
import { useEffect, useState } from "react"
import { Link } from "react-router"

const CardContainer = () => {
    const [listOfRes, setListOfRes] = useState([])
    const [filteredRes, setFilteredRes] = useState([])
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiRes = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.6606495&lng=73.73215850000001&str=Veg%20Biryani&trackingId=undefined&submitAction=ENTER&queryUniqueId=8a300f4b-5b30-143b-7a82-33c467d5d867");
        const jsonData = await apiRes.json();

        const filteredData = jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.filter((obj) => {
            return obj?.card?.card.hasOwnProperty('restaurant');
        })

        setFilteredRes(filteredData);
        setListOfRes(filteredData)

    }

    // if (filteredRes.length === 0) {
    //     return <h1>Loading...</h1>
    // }

    return (
        <div>
            <input className="serach" value={inputSearch} onChange={
                (e) => {
                    setInputSearch(e.target.value);
                    
                }}></input>

            <button onClick={() => {

                let partialSearchRes = listOfRes.filter(
                        (obj) => {
                            return obj?.card?.card?.restaurant?.info?.name?.toLowerCase().includes(inputSearch);
                        }
                    )
                    setFilteredRes(partialSearchRes);

                // const filteredList = cardList.filter(
                //     (res) => res.info.avgRating > 4.5
                // )
                // setListOfRes(filteredList);
            }}>Search</button>

            <div className="card-container">
                {filteredRes.map((cardObj, index) => {
                    return <Link to={"restaurant/" + cardObj?.card?.card?.restaurant?.info?.id} key={index}>
                        <Card cardData={cardObj?.card?.card?.restaurant}  />
                    </Link>
                })}
            </div>

        </div>

    )
}

export default CardContainer;