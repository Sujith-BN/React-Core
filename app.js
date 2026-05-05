import React from "react"
import ReactDOM from "react-dom/client"


/*

* Header
* - Logo 
* - NavItems
* Body
* - Search
* - Restro container
*    - restro cards
*      -image , name of restarunt , cuisine ,delivery time
* Footer
* - Links
* - Copyrights
* - Address
*/

const restaurantList = [
  {
    id: 1,
    name: "KFC",
    cuisine: "Fast Food",
    rating: 4.3,
    deliveryTime: "25 mins",
    price: "₹400 for two",
    location: "Shivamogga",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086"
  },
  {
    id: 2,
    name: "Domino's Pizza",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "30 mins",
    price: "₹500 for two",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  },
  {
    id: 3,
    name: "Meghana Foods",
    cuisine: "Biryani",
    rating: 4.6,
    deliveryTime: "35 mins",
    price: "₹600 for two",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d51a"
  },
  {
    id: 4,
    name: "Empire Restaurant",
    cuisine: "North Indian",
    rating: 4.2,
    deliveryTime: "20 mins",
    price: "₹350 for two",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    id: 5,
    name: "McDonald's",
    cuisine: "Burgers",
    rating: 4.1,
    deliveryTime: "22 mins",
    price: "₹300 for two",
    location: "Mysore",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 6,
    name: "Truffles",
    cuisine: "Continental",
    rating: 4.7,
    deliveryTime: "28 mins",
    price: "₹700 for two",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 7,
    name: "A2B",
    cuisine: "South Indian",
    rating: 4.0,
    deliveryTime: "18 mins",
    price: "₹250 for two",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
  {
    id: 8,
    name: "Pizza Hut",
    cuisine: "Italian",
    rating: 4.3,
    deliveryTime: "32 mins",
    price: "₹550 for two",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  },
  {
    id: 9,
    name: "Barbeque Nation",
    cuisine: "BBQ",
    rating: 4.6,
    deliveryTime: "40 mins",
    price: "₹1200 for two",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    id: 10,
    name: "Udupi Palace",
    cuisine: "South Indian",
    rating: 4.2,
    deliveryTime: "15 mins",
    price: "₹200 for two",
    location: "Udupi",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d51a"
  },
   {
    id: 11,
    name: "Burger King",
    cuisine: "Burgers",
    rating: 4.2,
    deliveryTime: "20 mins",
    price: "₹350 for two",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
  },
  {
    id: 12,
    name: "Subway",
    cuisine: "Healthy",
    rating: 4.1,
    deliveryTime: "18 mins",
    price: "₹300 for two",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980"
  },
  {
    id: 13,
    name: "Faasos",
    cuisine: "Rolls",
    rating: 4.3,
    deliveryTime: "25 mins",
    price: "₹400 for two",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  },
  {
    id: 14,
    name: "Behrouz Biryani",
    cuisine: "Biryani",
    rating: 4.5,
    deliveryTime: "35 mins",
    price: "₹600 for two",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1604908176997-4313c3d6c6d0"
  },
  {
    id: 15,
    name: "Cafe Coffee Day",
    cuisine: "Cafe",
    rating: 4.0,
    deliveryTime: "15 mins",
    price: "₹250 for two",
    location: "Mysore",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: 16,
    name: "Starbucks",
    cuisine: "Cafe",
    rating: 4.6,
    deliveryTime: "20 mins",
    price: "₹700 for two",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: 17,
    name: "Wow Momo",
    cuisine: "Chinese",
    rating: 4.2,
    deliveryTime: "22 mins",
    price: "₹300 for two",
    location: "Kolkata",
    image: "https://images.unsplash.com/photo-1604908554028-2c0c8c1a1f7a"
  },
  {
    id: 18,
    name: "Haldiram's",
    cuisine: "North Indian",
    rating: 4.4,
    deliveryTime: "28 mins",
    price: "₹500 for two",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
  {
    id: 19,
    name: "Anjappar",
    cuisine: "Chettinad",
    rating: 4.3,
    deliveryTime: "30 mins",
    price: "₹550 for two",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e"
  },
  {
    id: 20,
    name: "Paradise Biryani",
    cuisine: "Biryani",
    rating: 4.6,
    deliveryTime: "35 mins",
    price: "₹650 for two",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1600628422019-0eabf6d0f0f4"
  }
];

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Conatct Us</li>
                    <li>Cart</li>    
                </ul>

            </div>
        </div>
    )
}

const RestroCard = ({data})=>{
    
    
    return (
        <div className="res-card" >
          
           <img src={data.image + "?w=400"} alt="food" />
            <h1>{data.name}</h1>
            <h2>{data.cuisine}</h2>
            <h3>{data.rating}</h3>
            <h3>{data.deliveryTime}</h3>
            <h3>{data.location}</h3>
            <h3>{data.price}</h3>
         
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                {/* Restro cards */}
                {
                restaurantList.map((res)=>{
                    return <RestroCard key={res.id} data= {res}/>

                })
                 }   
                
              
            </div>

        </div>

    )
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)
