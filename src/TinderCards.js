import React, {useState} from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCards.css"

function TinderCards() {

const [people, setPeople] = useState([
    {
        name : "Elon Musk",
        url:"https://www.newtraderu.com/wp-content/uploads/2019/11/Elon-Musk.jpg",
    },
    {
        name : "Jeff Bezoz",
        url:"https://th.bing.com/th/id/OIP.MEOaa3z_WPjpdz4klmxPiAHaHa?rs=1&pid=ImgDetMain",
    },
]);

  return (
    <div className="tinderCards">
        <div className="tinderCards_cardContainer">
        {people.map((person) => (
            <TinderCard>

            </TinderCard>
            ))}
        </div>
    </div>
  );
}

export default TinderCards
