import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css'; 

function App() {
  return (
    <div className="app-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🍽️ Recipe Sharing App</h1>
      <p>Manage your recipes using React and Zustand!</p>
      
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}

export default App;