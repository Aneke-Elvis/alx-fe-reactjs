import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Derive favorites OUTSIDE Zustand selector → SAFE
  const favorites = favoriteIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>My Favorites</h2>

      {favorites.length === 0 ? <p>No favorites yet.</p> : null}

      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
