import {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getMealById} from '../api';
import {Preloader} from '../components/Preloader';
import {RecipeList} from '../components/RecipeList';

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const {id} = useParams();
  const {goBack} = useHistory();

  useEffect(() => {
    getMealById(id).then(data => setRecipes(data.meals));
  }, [id]);

  return(
    <>
     {
       !recipes.length ? <Preloader /> : <RecipeList recipes={recipes} />
     }
      <button className="btn" onClick={goBack}>Go back</button>
    </>
  );
}

export {Recipe};