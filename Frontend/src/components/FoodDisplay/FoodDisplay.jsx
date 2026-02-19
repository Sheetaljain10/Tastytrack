import { useContext, useMemo } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Normalize and filter safely
  const filteredItems = useMemo(() => {
    if (!food_list || food_list.length === 0) return [];

    if (category === "All") return food_list;

    return food_list.filter(
      (item) =>
        item.category &&
        item.category.toLowerCase().trim() ===
          category.toLowerCase().trim()
    );
  }, [food_list, category]);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {filteredItems.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
