import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Recipe Sharing App</h1>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />

        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
