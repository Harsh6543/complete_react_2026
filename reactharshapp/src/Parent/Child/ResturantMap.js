import './ResturantMap.css'
import MenuCard from '../MenuCard'
 
 const ResturantMap = ({menuData}) => {

    


    menuData = [
    {
      elementName: "Bread Butter",
      price: "75",
      image: "bread",
      description: "Soft bread topped with rich, creamy butter, lightly toasted and served fresh. This simple home-style breakfast feels warm and comforting, making it perfect for a light and satisfying start to the day."
    },
    {
      elementName: "Light Sandwich",
      price: "90",
      image: "sandwich",
      description: "Freshly sliced vegetables with a hint of mint chutney on buttered bread, lightly seasoned with spices and served fresh. This wholesome light sandwich is an ideal choice for a healthy and quick breakfast."
    },
    {
      elementName: "Pancakes",
      price: "120",
      image: "pancakes",
      description: "Classic house-made fluffy pancakes, grilled until golden brown with a soft, airy center. A simple yet delicious breakfast staple that is light, satisfying, and freshly prepared to order.",
    },
    {
      elementName: "Palak Paneer",
      price: "220", 
      image: "paneer",
      description: "Fresh cottage cheese cubes cooked in a smooth, creamy spinach gravy infused with garlic, ginger, and aromatic Indian spices. A healthy and flavorful classic served with a touch of fresh cream",
    },
    {
      elementName: "Mix Veg Curry",
      price: "180",
      image: "veg",
      description: "A colorful medley of seasonal vegetables like carrots, peas, cauliflower, and beans, simmered in a rich tomato-onion gravy. Finished with aromatic Indian spices and a touch of butter for a hearty, wholesome meal.",
    },
    {
      elementName: "Baingan Bharta",
      price: "160",
      image: "bharta",
      description: "Fire-roasted eggplant mashed to perfection and sautéed with chopped onions, tomatoes, and green chilies. This smoky, rustic North Indian classic is seasoned with authentic spices and finished with fresh coriander for a comforting, dhaba-style flavor",
    },
    {
      elementName: "Dal Makhani",
      price: "190",
      image: "makhni",
      description: "A rich, creamy classic made with whole black lentils and kidney beans, slow-cooked for 12 hours on a low flame. Finished with a generous dollop of white butter and fresh cream, giving it that authentic smoky and velvety dhaba-style taste",
    },
    {
      elementName: "Malai Kofta",
      price: "250",
      image: "kofta",
      description: "Indulge in melt-in-the-mouth dumplings made of mashed potatoes and paneer, deep-fried to golden perfection. These koftas are served in a rich, velvety gravy of cashew nuts and tomatoes, delicately flavored with cardamom and finished with a swirl of fresh cream",
    },
    {
      elementName: "Shahi Paneer",
      price: "240",
      image: "shahi",
      description: "Experience royalty with soft paneer cubes cooked in a luxurious, golden-hued gravy made from cashew paste, onions, and yogurt. Infused with aromatic spices like cardamom and saffron, this mildly sweet and creamy dish is finished with a touch of fresh cream and dried fenugreek leaves.",
    },
  ]
         
    return (
      <>
        <div className="card-grid">
            {menuData.map((item, index) => {
              return (
                <MenuCard 
                  number={index + 1}
                  elementName= {item.elementName} 
                  price= {item.price}
                  image= {item.image}
                  description= {item.description}
                  
                />
              )
            })}
        </div>
      </>
   )
 }
 
 export default ResturantMap
 