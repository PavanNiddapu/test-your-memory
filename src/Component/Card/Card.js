import React from "react";
import './Card.css';
const Card = (props) => {
    return (
        <div>
            {
                props.items.map(item => (
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={item.image} alt={""} width="300px" height="200px" />
                            </div>
                            <div className="flip-box-back">
                                <h2> {item.name} </h2>
                                <p> {item.designation} </p>
                                <p> {item.tenure}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default Card;
