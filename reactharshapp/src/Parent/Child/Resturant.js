//import React from 'react'
import './Resturant.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import images from "../../assets/images";


const Resturant = () => {

  const navigate = useNavigate();


  /*Breakfast*/
  const [maggiReadMore, setMaggiReadMore] = useState(false);
  const [fruitReadMore, setFruitReadMore] = useState(false);
  const [parathaReadMore, setParathaReadMore] = useState(false);


  /*Lunch*/
  const [riceReadMore, setRiceReadMore] = useState(false);
  const [choleReadMore, setCholeReadMore] = useState(false);
  const [vegReadMore, setVegReadMore] = useState(false);


  /*Dinner*/
  const [dosaReadMore, setDosaReadMore] = useState(false);
  const [paneerReadMore, setPaneerReadMore] = useState(false);
  const [biryaniReadMore, setBiryaniReadMore] = useState(false);



  const [category, setCategory] = useState("All");

  

  /*Breakfast*/
  const maggi = "Maggi Noodles are one of the most popular instant noodles enjoyed by people of all ages. Famous for their unique masala taste and quick 2-minute cooking time, Maggi Noodles have become a go-to comfort food for millions. Easy to prepare and satisfying in every bite, they’re perfect for a quick meal or snack anytime.";
  const fruit = "A colorful and delightful medley of the freshest seasonal fruits — including crisp apples, juicy mangoes, sweet bananas, luscious grapes, and tangy oranges — all tossed gently with a touch of honey and a sprinkle of mint leaves. Every bite gives a burst of natural sweetness, freshness, and energy, making it a perfect.";
  const paratha = "Enjoy our classic Punjabi-style Aloo Paratha, stuffed with a spicy and mashed potato filling, seasoned with fresh coriander and green chilies. Each paratha is pan-seared until golden brown and served hot with a bowl of creamy, chilled curd and a dollop of butter. It’s the perfect wholesome meal that tastes just like home."


  /*Lunch*/
  const rice = "Rice and Dal is a classic Indian comfort meal made with soft steamed rice and flavorful lentil curry. The dal is cooked with mild spices, making it warm, nutritious, and easy to digest. Together, they create a simple yet satisfying dish that is perfect for lunch and loved by people of all ages."
  const chole = "Chole Bhature is a popular North Indian dish that combines spicy, flavorful chickpea curry with soft and fluffy bhature. The rich chole is cooked with onions, tomatoes, and aromatic spices, while the bhature is deep-fried to a golden crisp. Together, they create a delicious and satisfying meal."
  const veg = "Experience the ultimate comfort meal with our Special Veg Thali. A wholesome platter featuring aromatic Basmati rice, soft handmade rotis, flavorful dal tadka, and two seasonal vegetable curries. Served with a side of refreshing raita, tangy pickle, and a sweet surprise";


  /*Dinner*/
  const dosa = "Masala Dosa is a classic South Indian dish made with a crispy, golden dosa filled with spicy and flavorful potato masala. The potato filling is cooked with onions, mustard seeds, curry leaves, and aromatic spices, giving it a rich and comforting taste. Served hot with coconut chutney and sambar, Masala Dosa is a popular."
  const paneer = "Paneer Butter Masala is a popular Indian curry made with soft paneer pieces cooked in a buttery tomato and cream-based gravy. Lightly spiced and rich in flavor, this dish is loved for its smooth texture and mildly sweet taste. It is best enjoyed with naan, roti, or rice and is a favorite dinner option."
  const biryani = "Treat yourself to our signature Hyderabadi Veg Biryani, where long-grain Basmati rice is slow-cooked (Dum) with a rich medley of garden-fresh vegetables and authentic Indian spices. Infused with saffron and garnished with caramelized onions and fresh mint, it is served with a side of cooling cucumber raita."
  
  

  return (
    <>

    <div className="menu-bar">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Breakfast")}>Breakfast</button>
      <button onClick={() => setCategory("Lunch")}>Lunch</button>
      <button onClick={() => setCategory("Dinner")}>Dinner</button>
    </div>





        <div className="wrapper">

          {(category === "All" || category === "Breakfast") && (
                <div className="contaniner">
                  <div className="box" >
                      <div className="body">
                          <span className="box-number">1</span> 
                          <br/>
                          <span className="box-name">Breakfast</span>
                          <br/>

                          <h1 className="box-food">Maggi Noodles</h1>
                          <br/>
                          
                          <img src={images.maggi} alt="Maggi-Noddles" />

                          <p>
                            {maggiReadMore ? maggi : maggi.slice(0, 60) + "..."}
                          </p> 


                          <div className="card-actions-container">
                            <div className="price-row">
                                <span className='priceBtn'>₹25</span>
                                <button onClick={() => setMaggiReadMore(!maggiReadMore)} className="readMoreBtn"> {maggiReadMore ? "Read Less" : "Read More"}</button>
                            </div>

                            <div className="button-row">
                                <button className='addCartbtn'>Add to Cart</button>
                                <button className="orderNowBtn" onClick={({}) => navigate("/payment", {state: {price:25}}) }>Order Now</button>
                            </div>

                          </div>

                        </div>
                  </div>
              </div>
          )}

          {(category === "All" || category === "Breakfast") && (
            <div className="contaniner1">
                <div className='box1'>
                    <div className="body1">
                        <span className="box-number1">2</span> 
                        <br/>
                        <span className="box-name1">Breakfast</span>
                        <br/>

                        <h1 className="box-food1">Fruit salad</h1>
                        <br/>

                        <img src={images.fruit} alt="Fruit salad" />

                        <p>
                          {fruitReadMore ? fruit : fruit.slice(0, 60) + "..."}
                        </p> 


                        <div className="card-actions-container1">
                            <div className="price-row1">
                                <span className='priceBtn1'>₹150</span>
                                <button onClick={() => setFruitReadMore(!fruitReadMore)} className="readMoreBtn1"> {fruitReadMore ? "Read Less" : "Read More"}</button>
                            </div>
                        </div>

                        <div className="button-row1">
                          <button className='addCartbtn1'>Add to Cart</button>
                          <button className="orderNowBtn1" onClick={() => navigate("/payment", {state: {price:150}})}>Order Now</button>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
          )}

          {(category === "All" || category === "Breakfast") && (
            <div className="contaniner2">
                <div className='box2'>
                    <div className="body2">
                        <span className="box-number2">3</span> 
                        <br/>
                        <span className="box-name2">Breakfast</span>
                        <br/>

                        <h1 className="box-food2">Aloo Paratha with Curd</h1>
                        <br/>

                        <img src={images.paratha} alt="Aloo Paratha with Curd" />

                        <p>
                          {parathaReadMore ? paratha : paratha.slice(0, 60) + "..."}
                        </p> 


                        <div className="card-actions-container2">
                            <div className="price-row2">
                                <span className='priceBtn2'>₹99</span>
                                <button onClick={() => setParathaReadMore(!parathaReadMore)} className="readMoreBtn2"> {parathaReadMore ? "Read Less" : "Read More"}</button>
                            </div>
                        </div>

                        <div className="button-row2">
                          <button className='addCartbtn2'>Add to Cart</button>
                          <button className="orderNowBtn2" onClick={() => navigate("/payment", {state: {price:99}})}>Order Now</button>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
          )}
          
        </div>

        
        <div className='wrapper1'>
        
          {(category === "All" || category === "Lunch") && (
            <div className="contaniner3">
                <div className='box3'>
                    <div className="body3">
                        <span className="box-number3">4</span> 
                        <br/>
                        <span className="box-name3">Lunch</span>
                        <br/>

                        <h1 className="box-food3">Rice & Dal</h1>
                        <br/>

                        <img src={images.rice} alt="Rice & Dal" />

                        <p>
                          {riceReadMore ? rice : rice.slice(0, 60) + "..."}
                        </p> 

                        <div className='card-actions-container3'>
                            <div className='price-row3'>
                                <span className='priceBtn3'>₹99</span>
                                <button onClick={() => setRiceReadMore(!riceReadMore)} className="readMoreBtn3"> {riceReadMore ? "Read Less" : "Read More"}</button>
                            </div>

                            <div className='button-row3'>
                                <button className='addCartbtn3'>Add to Cart</button>
                                <button className="orderNowBtn3" onClick={() => navigate("/payment", {state: {price:99}})}>Order Now</button>
                            </div>
                        </div>
                              
                              
                    </div>
                </div>
            </div>
          )}

        

          {(category === "All" || category === "Lunch") && (
              <div className="contaniner4">
                <div className='box4'>
                    <div className="body4">
                        <span className="box-number4">5</span> 
                        <br/>
                        <span className="box-name4">Lunch</span>
                        <br/>

                        <h1 className="box-food4">Chole Bhature</h1>
                        <br/>

                        <img src={images.chole} alt="Chole Bhature" />

                        <p>
                          {choleReadMore ? chole : chole.slice(0, 60) + "..."}
                        </p> 

                        <div className='card-actions-container4'>
                            <div className='price-row4'>
                                <span className='priceBtn4'>₹150</span>
                                <button onClick={() => setCholeReadMore(!choleReadMore)} className="readMoreBtn4"> {choleReadMore ? "Read Less" : "Read More"}</button>
                            </div>

                            <div className='button-row4'>
                                <button className='addCartbtn4'>Add to Cart</button>
                                <button className="orderNowBtn4" onClick={() => navigate("/payment", {state: {price:150}})}>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            )}



            {(category === "All" || category === "Lunch") && (
                <div className="contaniner5">
                  <div className='box5'>
                      <div className="body5">
                          <span className="box-number5">6</span> 
                          <br/>
                          <span className="box-name5">Lunch</span>
                          <br/>

                          <h1 className="box-food5">Veg Thali</h1>
                          <br/>

                          <img src={images.veg} alt="Veg Thali" />

                          <p>
                            {vegReadMore ? veg : veg.slice(0, 60) + "..."}
                          </p> 

                          <div className='card-actions-container5'>
                              <div className='price-row5'>
                                  <span className='priceBtn5'>₹179</span>
                                  <button onClick={() => setVegReadMore(!vegReadMore)} className="readMoreBtn5"> {vegReadMore ? "Read Less" : "Read More"}</button>
                              </div>

                              <div className='button-row5'>
                                  <button className='addCartbtn5'>Add to Cart</button>
                                  <button className="orderNowBtn5" onClick={() => navigate("/payment", {state: {price:179}})}>Order Now</button>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            )}

        </div>


        <div className="wrapper2">
          {(category === "All" || category === "Dinner") && ( 
            <div className="contaniner6">
              <div className='box6'>
                  <div className="body6">
                      <span className="box-number6">7</span> 
                      <br/>
                      <span className="box-name6">Dinner</span>
                      <br/>

                      <h1 className="box-food6">Masala Dosa</h1>
                      <br/>

                      <img src={images.dosa} alt='Masala Dosa'/>

                      <p>
                        {dosaReadMore ? dosa : dosa.slice(0, 60) + "..."}
                      </p> 


                      <div className='card-actions-container6'>
                          <div className='price-row6'>
                              <span className='priceBtn6'>₹120</span>
                              <button onClick={() => setDosaReadMore(!dosaReadMore)} className="readMoreBtn6"> {dosaReadMore ? "Read Less" : "Read More"}</button>
                          </div>

                          <div className='button-row6'>
                              <button className='addCartbtn6'>Add to Cart</button>
                              <button className="orderNowBtn6" onClick={() => navigate("/payment", {state: {price:120}})}>Order Now</button>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        )}


        {(category === "All" || category === "Dinner") && (
          <div className="contaniner7">
              <div className='box7'>
                  <div className="body7">
                      <span className="box-number7">8</span> 
                      <br/>
                      <span className="box-name7">Dinner</span>
                      <br/>

                      <h1 className="box-food7">Paneer Butter Masala</h1>
                      <br/>

                      <img src={images.paneer} alt='Paneer Butter Masala'/>

                      <p>
                        {paneerReadMore ? paneer : paneer.slice(0, 60) + "..."}
                      </p> 


                      <div className='card-actions-container7'>
                          <div className='price-row7'>
                              <span className='priceBtn7'>₹250</span>
                              <button onClick={() => setPaneerReadMore(!paneerReadMore)} className="readMoreBtn7"> {paneerReadMore ? "Read Less" : "Read More"}</button>
                          </div>

                          <div className='button-row7'>
                              <button className='addCartbtn7'>Add to Cart</button>
                              <button className="orderNowBtn7" onClick={() => navigate("/payment", {state: {price:250}})}>Order Now</button>
                          </div>
                      </div>
                              
                        
                  </div>
              </div>
          </div>
        )}


        {(category === "All" || category === "Dinner") && (
          <div className="contaniner8">
              <div className='box8'>
                  <div className="body8">
                      <span className="box-number8">9</span> 
                      <br/>
                      <span className="box-name8">Dinner</span>
                      <br/>

                      <h1 className="box-food8">Veg Biryani with Raita</h1>
                      <br/>

                      <img src={images.biryani} alt='Veg Biryani with Raita'/>

                      <p>
                        {biryaniReadMore ? biryani : biryani.slice(0, 60) + "..."}
                      </p> 


                      <div className='card-actions-container8'>
                          <div className='price-row8'>
                              <span className='priceBtn8'>₹189</span>
                              <button onClick={() => setBiryaniReadMore(!biryaniReadMore)} className="readMoreBtn8"> {biryaniReadMore ? "Read Less" : "Read More"}</button>
                          </div>

                          <div className='button-row8'>
                              <button className='addCartbtn8'>Add to Cart</button>
                              <button className="orderNowBtn8" onClick={() => navigate("/payment", {state: {price:189}})}>Order Now</button>
                          </div>
                      </div>
                              
                        
                  </div>
              </div>
          </div>
        )}
        
      </div>
 
    </>
  )
}

export default Resturant
