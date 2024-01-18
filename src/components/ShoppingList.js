import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

function ShoppingList() {
  //create a list of unique categories
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            <div>
              {plant.name}
              {plant.isBestSale && <span>🔥</span>}
            </div>
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes ✨</div>}
          </li>
        ))}
      </ul>

      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
