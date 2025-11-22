import { useState } from 'react';
import useRecipeStore from '../recipeStore';

/**
 * Component for adding a new recipe to the Zustand store.
 */
const AddRecipeForm = () => {
  // Select the addRecipe action from the store
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // Local state for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill out both the title and description.');
      return;
    }

    // Call the addRecipe action with a new recipe object
    addRecipe({
      id: Date.now(), // Use a timestamp for a simple unique ID
      title,
      description,
    });

    // Reset form fields
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form" style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px', marginBottom: '20px', padding: '10px', border: '1px solid #eee' }}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
        style={{ padding: '8px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
        style={{ padding: '8px' }}
      />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;