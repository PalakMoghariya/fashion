// import React from 'react'
// import './css/Product.css'
// import star from './images/star.png'
// import image from './images/star1.png'
// import star_img from './images/star2-removebg-preview.png'

// function Product() {
//     return (
//         <div>
//             <div className='tw-flex tw-justify-between tw-mx-auto tw-my-0 tw-w-11/12 tw-mt-2'>
//                 <div className='tw-w-1/5 custom-div div-product1'>
//                     <div className='bg-product-img1'></div>
//                     <div>
//                         <h5 className="card-title">Consectetur Hampden</h5>
//                         <p className="card-text">$98.00</p>
//                         <img src={star} alt="star-img" className='star-img' />
//                         <a href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='wish1'><path fill="#0d0d0d" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
//                         </a>
//                         <br />
//                         <a href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
//                                 <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
//                             </svg>
//                         </a>
//                         <button className='btn1'>Add to cart</button>
//                         <button className='btn2'>Quick View</button>
//                     </div>
//                 </div>

//                 <div className='tw-w-1/5 custom-div div-product2'>
//                     <div className='bg-product-img2'></div>
//                     <div>
//                         <h5 className="card-title">Exercitat Virginia</h5>
//                         <p className="card-text"><p className='text-p'>$87.00</p> <p className='text-p1'>-5%</p> <p className='text-p2'>$82.65</p></p>
//                         <img src={star_img} alt="star-image2" className='star' />

//                         <a href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='wish2'><path fill="#0d0d0d" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
//                         </a>
//                         <br />
//                         <a href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark save" viewBox="0 0 16 16">
//                                 <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
//                             </svg>
//                         </a>

//                         <button className='btn3'>Add to Cart</button>
//                         <button className='btn4'>Quick View</button>
//                     </div>
//                 </div>

//                 <div className='tw-w-1/5 custom-div product3-div'>
//                     <div className='bg-product-img3'></div>
//                     <div>
//                         <h5 className="card-title">Accusantium Doloremque</h5>
//                         <p className="card-text">$110.00</p>
//                         <img src={image} alt="star-img" className='star-img1' />

//                         <a href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='wish3'><path fill="#0d0d0d" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
//                         </a>
//                         <br />
//                         <a href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmark save1" viewBox="0 0 16 16">
//                                 <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
//                             </svg>
//                         </a>

//                         <button className='btn5'>Add to Cart</button>
//                         <button className='btn6'>Quick View</button>
//                     </div>
//                 </div>

//                 <div className='tw-w-1/5 custom-div product4-div'>
//                     <div className='bg-product-img4'></div>
//                     <div>
//                         <h5 className="card-title">Voluptas Assumenda</h5>
//                         <p className="card-text">$78.00</p>
//                         <img src={image} alt="star-img" className='star-img1' />

//                         <a href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='wish4'><path fill="#0d0d0d" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
//                         </a>
//                         <br />
//                         <a href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark save2" viewBox="0 0 16 16">
//                                 <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
//                             </svg>
//                         </a>

//                         <button className='btn7'>Add to cart</button>
//                         <button className='btn8'>Quick View</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Product