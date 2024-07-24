import React from "react";
import Scam from "./Scam";
import {data} from '../data';

const ScamList = () => {
    return (
        <div className="containerListScams">
            {data.map((scam, index) => (
                <Scam key={index} scams={scam} />
            ))}
        </div>
    );
}
export default ScamList;