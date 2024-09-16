import React from 'react';


const Sale: React.FC = () => {
    return(
        <div className="sale">
            <div className="saleText">
                <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
                <a href="">ShopNow</a>

                <div className="select">
                <select>
                    <option value="">English</option>
                    <option value="">Russian</option>
                </select>
                </div>
            </div>
        </div>
    )
}

export default Sale;