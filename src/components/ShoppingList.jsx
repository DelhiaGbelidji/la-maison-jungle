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
  return (
    <div>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, category }) =>
          !selectedCategory || selectedCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
              />
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
