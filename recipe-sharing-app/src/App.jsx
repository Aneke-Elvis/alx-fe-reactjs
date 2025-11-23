import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
      <div style={{ padding: '20px' }}>
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
                <SearchBar />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />

          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
  );
}

export default App;
