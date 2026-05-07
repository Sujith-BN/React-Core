// utils/mockApi.js
export const fetchRestaurants = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1,  name: "Chai Point",                image: "tea",          cuisine: "Cafe",         rating: 4.4, deliveryTime: "15 mins", price: "₹150 for two",  location: "Bangalore"  },
                { id: 2,  name: "Chai Brothers",             image: "tea",          cuisine: "Cafe",         rating: 4.2, deliveryTime: "12 mins", price: "₹120 for two",  location: "Pune"       },
                { id: 3,  name: "Chai & Snacks Corner",      image: "snacks",       cuisine: "Cafe",         rating: 4.1, deliveryTime: "10 mins", price: "₹100 for two",  location: "Mysore"     },
                { id: 4,  name: "Leon's Burgers",            image: "cheeseburger", cuisine: "Burgers",      rating: 4.6, deliveryTime: "22 mins", price: "₹450 for two",  location: "Mangalore"  },
                { id: 5,  name: "Burger Barn",               image: "burger",       cuisine: "Burgers",      rating: 4.3, deliveryTime: "20 mins", price: "₹350 for two",  location: "Bangalore"  },
                { id: 6,  name: "Burger Factory",            image: "whopper",      cuisine: "Burgers",      rating: 4.5, deliveryTime: "25 mins", price: "₹400 for two",  location: "Chennai"    },
                { id: 7,  name: "Burger Republic",           image: "cheeseburger", cuisine: "Burgers",      rating: 4.1, deliveryTime: "18 mins", price: "₹300 for two",  location: "Hyderabad"  },
                { id: 8,  name: "Biryani Blues",             image: "biryaniblue",  cuisine: "Biryani",      rating: 4.7, deliveryTime: "35 mins", price: "₹600 for two",  location: "Delhi"      },
                { id: 9,  name: "Biryani House",             image: "biryani",      cuisine: "Biryani",      rating: 4.5, deliveryTime: "30 mins", price: "₹550 for two",  location: "Hyderabad"  },
                { id: 10, name: "Biryani Express",           image: "dumbiryani",   cuisine: "Biryani",      rating: 4.4, deliveryTime: "28 mins", price: "₹500 for two",  location: "Mumbai"     },
                { id: 11, name: "Behrouz Biryani",           image: "biryani",      cuisine: "Biryani",      rating: 4.6, deliveryTime: "38 mins", price: "₹650 for two",  location: "Bangalore"  },
                { id: 12, name: "Pizza Nation",              image: "pizza",        cuisine: "Italian",      rating: 4.3, deliveryTime: "30 mins", price: "₹500 for two",  location: "Mumbai"     },
                { id: 13, name: "Pizza Street",              image: "pizzahut",     cuisine: "Italian",      rating: 4.2, deliveryTime: "28 mins", price: "₹450 for two",  location: "Bangalore"  },
                { id: 14, name: "Pizza Lab",                 image: "pizza",        cuisine: "Italian",      rating: 4.5, deliveryTime: "32 mins", price: "₹550 for two",  location: "Pune"       },
                { id: 15, name: "The Pasta Lab",             image: "pasta",        cuisine: "Italian",      rating: 4.6, deliveryTime: "32 mins", price: "₹650 for two",  location: "Hyderabad"  },
                { id: 16, name: "The Egg Factory",           image: "eggs",         cuisine: "Breakfast",    rating: 4.5, deliveryTime: "25 mins", price: "₹400 for two",  location: "Bangalore"  },
                { id: 17, name: "The Waffle Factory",        image: "waffle",       cuisine: "Desserts",     rating: 4.7, deliveryTime: "20 mins", price: "₹350 for two",  location: "Pune"       },
                { id: 18, name: "The Burger Factory",        image: "burger",       cuisine: "Burgers",      rating: 4.3, deliveryTime: "22 mins", price: "₹380 for two",  location: "Delhi"      },
                { id: 19, name: "Peshawar Dhaba",            image: "kebab",        cuisine: "Mughlai",      rating: 4.5, deliveryTime: "38 mins", price: "₹700 for two",  location: "Delhi"      },
                { id: 20, name: "Delhi Dhaba",               image: "curry",        cuisine: "North Indian", rating: 4.3, deliveryTime: "25 mins", price: "₹350 for two",  location: "Delhi"      },
                { id: 21, name: "Dhaba Express",             image: "roti",         cuisine: "North Indian", rating: 4.1, deliveryTime: "20 mins", price: "₹280 for two",  location: "Jaipur"     },
                { id: 22, name: "Noodle Street",             image: "noodles",      cuisine: "Chinese",      rating: 4.2, deliveryTime: "25 mins", price: "₹300 for two",  location: "Kolkata"    },
                { id: 23, name: "Noodle Box",                image: "noodles",      cuisine: "Chinese",      rating: 4.4, deliveryTime: "22 mins", price: "₹320 for two",  location: "Bangalore"  },
                { id: 24, name: "Noodle House",              image: "momo",         cuisine: "Chinese",      rating: 4.3, deliveryTime: "28 mins", price: "₹350 for two",  location: "Mumbai"     },
                { id: 25, name: "Sushi Sakura",              image: "sushi",        cuisine: "Japanese",     rating: 4.8, deliveryTime: "45 mins", price: "₹1100 for two", location: "Mumbai"     },
                { id: 26, name: "Taco Tribe",                image: "taco",         cuisine: "Mexican",      rating: 4.5, deliveryTime: "28 mins", price: "₹500 for two",  location: "Bangalore"  },
                { id: 27, name: "Pav Bhaji Express",         image: "pavbhaji",     cuisine: "Street Food",  rating: 4.1, deliveryTime: "18 mins", price: "₹180 for two",  location: "Mumbai"     },
                { id: 28, name: "Dakshin Express",           image: "sambhar",      cuisine: "South Indian", rating: 4.3, deliveryTime: "20 mins", price: "₹220 for two",  location: "Chennai"    },
                { id: 29, name: "Kathi Roll Corner",         image: "roll",         cuisine: "Rolls",        rating: 4.2, deliveryTime: "15 mins", price: "₹250 for two",  location: "Kolkata"    },
                { id: 30, name: "Malabar Kitchen",           image: "fish",         cuisine: "Kerala",       rating: 4.6, deliveryTime: "40 mins", price: "₹750 for two",  location: "Kochi"      },
            ]
)
        }, 2000) // fake 1.5 second network delay
    })
}