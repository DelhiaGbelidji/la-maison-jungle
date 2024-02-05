import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";
import { useState } from "react";

function ShoppingList({ cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
	const currentPlantAdded = cart.find((plant) => plant.name === name)
	if (currentPlantAdded) {
		const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		)
		setCart([
			...cartFilteredCurrentPlant,
			{ name, price, amount: currentPlantAdded.amount + 1 }
		])
	} else {
		setCart([...cart, { name, price, amount: 1 }])
	}
}

  return (
    <div>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !selectedCategory || selectedCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
				price={price}
              />
			  <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
