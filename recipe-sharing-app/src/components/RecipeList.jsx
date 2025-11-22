import useRecipeStore from '../recipeStore';

/**
 * Component to display the list of recipes from the Zustand store.
 */
const RecipeList = () => {
  // Select the recipes array from the store
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet. Use the form below!</p>
      ) : (
        recipes.map((recipe) => (
          // Use recipe.id as a unique key
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>
              **Description:** *{recipe.description}*
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;