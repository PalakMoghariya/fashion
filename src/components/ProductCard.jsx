import React from 'react';
import './css/ProductCard.css'; 

function ProductCard() {
  return (
  <div className='tw-bg-black tw-mt-0 tw-pt-7 pb-7 card-div'>
      <section className='card-section'>
        {/* card1 */}
        <div className="card" >
          <div className="inner">
            <div className="front">
              <img src="https://codezeel.com/prestashop/PRS05/PRS050106/img/p/2/4/24-home_default.jpg" alt="Hampden Estate" className='Hampden-img' />
            </div>

            <div className="back">
              <p className='card-p1'>Hampden Estate is a renowned rum producer located in Jamaica, famous for its traditional methods of rum-making and its use of wild yeast fermentation.</p>
              <p className='card-p2'><b>Price : </b>$98.00</p>
              <button className='card-btn'>Add to cart</button><br />
              <button className='card-btn1'>Buy Now</button><br />
              <button className='card-btn2'>Add to wishlist</button>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="card1">
          <div className="inner1">
            <div className="front1">
              <img src="https://images.meesho.com/images/products/461016060/5hshx_512.webp" alt="sport shoes" className='tw-h-full' />
            </div>

            <div className="back1">
              <p className='card-p3'>Whether your little one is running, playing, or dressing up for a party, these shoes are crafted with comfort in mind.</p>
              <p className='card-p4'><b>Price : </b>$90.00</p>
              <button className='card-btn3'>Add to cart</button><br />
              <button className='card-btn4'>Buy Now</button><br />
              <button className='card-btn5'>Add to wishlist</button>
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="card2">
          <div className="inner2">
            <div className="front2">
              <img src="https://www.zigzagss.com/cdn/shop/files/3.png?v=1720107998" alt="Transparent Ear-burds" className='burds-image' />
            </div>

            <div className="back2">
              <p className='card-p5'>Air 39 Transparent Earbuds: Stylish, ENC noise-canceling, Bluetooth 5.3, transparent design for a fashionable audio experience</p>
              <p className='card-p6'><b>Price : </b>$50.00</p>
              <button className='card-btn6'>Add to cart</button><br />
              <button className='card-btn7'>Buy Now</button><br />
              <button className='card-btn8'>Add to wishlist</button>
            </div>
          </div>
        </div>

        {/* card4 */}
        <div className="card3">
          <div className="inner3">
            <div className="front3">
              <img src="https://i0.wp.com/digitalphotographylive.com/wp-content/uploads/2013/10/Sony-A7-and-A7R.jpg?ssl=1" alt="" className='c-img4' />
            </div>

            <div className="back3">
              <p className='card-p7'>The Digital Camera Pro X100 offers top-tier features for both amateurs and professionals.</p>
              <p className='card-p8'><b>Price : </b>$75.00</p>
              <button className='card-btn9'>Add to cart</button><br />
              <button className='card-btn10'>Buy Now</button><br />
              <button className='card-btn11'>Add to wishlist</button>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default ProductCard