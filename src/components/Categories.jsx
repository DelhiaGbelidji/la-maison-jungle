function Categories({ selectedCategory, categories, setSelectedCategory }) {
  return (
    <div>
      <select
        name="plant-categories"
        id="plant-categories-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value={""}>All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>{" "}
      <button onClick={() => setSelectedCategory("")}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
