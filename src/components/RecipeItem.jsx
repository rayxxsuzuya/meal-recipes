function RecipeItem(props) {
  const {idMeal, strMeal, strCategory, strInstructions, strMealThumb, strArea, strYoutube} = props;

  return (
    <div className="recipe">
      <img src={strMealThumb} alt={strMeal} className="recipe-image"/>
      <h1>{strMeal}</h1>
      <h6>Category: {strCategory}</h6>
      {!strArea ? <h6>Area: Unknown</h6> : <h6>Area: {strArea}</h6>}
      <p>{strInstructions}</p>
        <table className="centered">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(props).map(key => {
              if(key.includes('Ingredient') && props[key] ) {
                return (
                  <tr key={key}>
                    <td>{props[key]}</td>
                    <td>{
                        props[`strMeasure${key.slice(13)}`]
                      }</td>
                  </tr>
                )
              }
              return null;
            })
          }
        </tbody>
      </table>
      {strYoutube ? (
        <div className="row">
          <h5 style={{margin: '30px 0 15px'}}>Video Recipe</h5>
          <iframe title={idMeal} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} allowFullScreen/>
        </div>
        ) : null}
    </div>
  );
}

export {RecipeItem};