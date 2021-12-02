import { useState } from "react";
import { Input } from "antd";

function AddFoodForm({ addFoodForm }) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(1)

    const handleName = (event) => setName(event.target.value);
    const handleImage = (event) => setImage(event.target.value);
    const handleCalories = (event) => setCalories(event.target.value);
    const handleServings = (event) => setServings(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        console.log('newfood', newFood);
        addFoodForm(newFood);

        setName("");
        setImage("");
        setCalories(0);
        setServings(1);

    }


    return (

        <div>
            <h4>Add your food</h4>
            <form onSubmit={handleSubmit}>

                <label>Name:</label>
                <Input type="text" name="name" value={name} onChange={handleName} />

                <label>Image:</label>
                <Input type="url" name="image" value={image} onChange={handleImage} />

                <label>Calories:</label>
                <Input type="number" name="calories" value={calories} onChange={handleCalories} />

                <label>Servings:</label>
                <Input type="number" name="servings" value={servings} onChange={handleServings} />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddFoodForm;