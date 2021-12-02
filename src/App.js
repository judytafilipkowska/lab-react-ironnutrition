import { useState } from 'react';
import './App.css';
import { Row } from "antd";
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFormFood';
import Search from './components/Search';
import ForwardDirectoryTree from 'antd/lib/tree/DirectoryTree';


function App() {

  const [allFood, setAllFood] = useState(foods);
  const [searchFood, setSearchFood] = useState(foods);

  const addFoodForm = (foodObj) => {
    console.log(foodObj);
    const updatedSearchFoods = [foodObj, ...searchFood]

    const updatedAllFoods = [foodObj, ...allFood]
    // console.log('updatedFoods :>> ', updatedAllFoods);


    setAllFood(updatedAllFoods);
    setSearchFood(updatedSearchFoods);
  }

  const foundFood = (text) => {
    let filteredFood;
    if (text === "") {
      filteredFood = allFood;
    } else {
      filteredFood = allFood.filter((oneFood) => {
        return oneFood.name.toLowerCase().includes(text.toLowerCase())
      })
    }
    console.log(filteredFood)
    setSearchFood(filteredFood);
  }
  const deleteFood = (foodName) => {
    const newArr = [...searchFood];
    const filteredArr = newArr.filter((oneFood) => {
      return oneFood.name !== foodName;
    })
    setSearchFood([...filteredArr])
  }


  return (
    <div >
      <AddFoodForm addFoodForm={addFoodForm} className="form" />
      <Search foundFood={foundFood} />
      <h3 id="title">Food list</h3>
      <div className="App" >
        <Row className gutter={[16, 16]}>
          {searchFood.map((food) => {
            return (
              <FoodBox food={food} key={food.name} deleteFood={deleteFood} />
            )
          })
          }
        </Row>
      </div>
    </div>
  );
}


export default App;
