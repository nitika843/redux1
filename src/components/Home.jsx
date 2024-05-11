import React from 'react';

import './Home.css';

function Home(props) {
    return (
        <div className='main'>
            <h1 className='heading'>Home Component</h1>
            <div className="cart">
                <div className="img-wrappe">
                    <img className='iphone' src="https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg" alt='img' />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div >
                    <button
                        className="btn btn-primary"
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home