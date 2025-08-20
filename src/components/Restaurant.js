import { useParams } from 'react-router';
import { RES_MENU } from '../enums/constants';
import { useEffect, useState } from 'react';

const Restaurant = () => {
    const [menuList, setMenuList] = useState(null)
    const { resId } = useParams();

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const apiRes = (await fetch(RES_MENU + resId));
        const resDetails = await apiRes.json()
        const filteredData = await resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((obk) => {
            return obk?.card?.card?.hasOwnProperty("categories");
        })
        console.log(filteredData);
        setMenuList(filteredData);
    }

    // console.log("useRaouter", useParams());
    if (menuList === null) return <div>Loading...</div>
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {
                    menuList.map((element, index) => (
                        <li key={element.card.card.categoryId}>
                            {
                                <div>
                                    <h3>{element.card.card.title}</h3>
                                    {
                                        element.card.card.categories.map((item, itemIndex) => {
                                            return <span key={itemIndex}>
                                                {
                                                    <span>
                                                        {item?.itemCards[0]?.card?.info?.name} <br></br>
                                                    </span> 
                                                }
                                            </span>
                                        })
                                    }
                                </div>
                            }
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Restaurant;