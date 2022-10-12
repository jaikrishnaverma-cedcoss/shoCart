import React from 'react';
import products from '../Data';
function Body(props) {
    return (
        <>
            <div className=" row flexJCC p3 div1" style={{ width: "94vw" }}>
                {
                    products.map(prd => {
                        return <div key={prd.id} className="card m1 "><div className="col  bRd5"> <img className="card" src={prd.image} alt="" /><button className="btn btn-info m5" onClick={() => props.addToCart(prd)}>Add to Cart</button></div></div>
                    })
                }
            </div>
        </>
    );
}

export default Body;