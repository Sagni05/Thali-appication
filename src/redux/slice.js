import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: '',
    products: [
      {
        id: 1,
        image:"https://spicesnflavors.com/wp-content/uploads/2020/06/tandoori-roti-2-1-500x375.jpg", 
        name: "Chapati(Tandoori roti)",
        category: "Lunch",
        price: "12",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. " 
      },
    
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrN11Ht94LXz__SkDhkhzxPQDpOq56EBc-uA&usqp=CAU",
        name: "Pickle",
        category: "Any Time",
        price: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
      },

      {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEe-LoOWWh4CfGvToGDgyBeRfqLggqdeOuxg&usqp=CAU",
        name: "Curd",
        category: "Lunch",
        price: "20",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
      },

      {
        id: 4,
        image: "https://www.postoast.com/wp-content/uploads/2020/01/Rasgulla-sweet-dish.jpg",
        name: "Sweet",
        category: "Any Time",
        price: "10",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
         },

      {
        id: 5,
        image: "https://i.ytimg.com/vi/M7nvJN0vQ3g/maxresdefault.jpg",
        name: "Daal",
        category: "Lunch",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
          },

      {
        id: 6,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ime81lssy8ozalrontlq",
         name: "Non-Veg Thali",
        category: "dinner",
        price: "250",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . "
        },

      {
        id: 7,
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
        name: "Paneer Dish",
        category: "dinner",
        price: "150",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . ",
      },

      {
        id: 8,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jrvme8yjgt6h1l9wzo0k",
        name: "McDonald's",
        category: "lunch",
        price: "200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
           },

      {
        id: 9,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cqgea0y4rve8l6d70dvn",
        name: "Chole-samaso",
        category: "evening",
        price: "40",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
      },

      {
        id: 10,
        image: "https://allchickenrecipe.com/wp-content/uploads/2020/05/Chicken-Lollipop.jpg",
        name: "Chicken Lollipop",
        category: "dinner",
        price: "120",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
      },

    ],
    thali:[],
  },
  reducers: {
    addTothali: (state, action) => {
      state.thali.push(action.payload);
    },
    
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

export const { addTothali,RemoveItem }= counterSlice.actions;

export default counterSlice.reducer;
