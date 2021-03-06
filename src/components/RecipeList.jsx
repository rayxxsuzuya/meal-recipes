import {RecipeItem} from './RecipeItem'

function RecipeList({recipes}) {
  return(
    <>
     {
       recipes.map(recipe => {
         return <RecipeItem key={recipe.idMeal} {...recipe} />
       })
     }
    </>
  );
}

export {RecipeList};