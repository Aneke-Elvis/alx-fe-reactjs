import { create } from 'zustand';

// Define the store
const useRecipeStore = create((set) => ({
  // State
  recipes: [],

  // Actions
  /**
   * Adds a new recipe object to the recipes array.
   * @param {object} newRecipe - The recipe object to add (e.g., { id, title, description }).
   */
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  /**
   * Replaces the current recipes state with a new array.
   * @param {array} recipes - The new array of recipes.
   */
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;