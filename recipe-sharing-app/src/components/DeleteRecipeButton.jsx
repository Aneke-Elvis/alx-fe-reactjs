import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/'); // go back to home after delete
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: "20px", color: "red" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
