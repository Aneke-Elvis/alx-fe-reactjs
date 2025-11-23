import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const listToShow = searchTerm.trim() ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {listToShow.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        listToShow.map((recipe) => {
          const isFav = favorites.includes(recipe.id);
          return (
            <div key={recipe.id} style={{ marginBottom: '10px' }}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <button
                onClick={() =>
                  isFav ? null : addFavorite(recipe.id)
                }
                style={{ padding: '5px 10px', cursor: 'pointer' }}
              >
                {isFav ? 'Favorited' : 'Add to Favorites'}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;
