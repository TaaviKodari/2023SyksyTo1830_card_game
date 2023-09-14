
export default function Card({card}){
    return(
        <div className="card">
            <img src={card.image}/>
            <ul className="stat-list">
                <li className="stat-list-item">
                    <span>Cuteness</span>
                    <span>9</span>
                </li>
            </ul>
         
        </div>
    );
}