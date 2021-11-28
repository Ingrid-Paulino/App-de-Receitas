import React, { useEffect, useState } from 'react';
import AreaSelect from '../components/AreaSelect';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';
import fetchApi from '../utils/FetchApi';

export default function ExplorarComidasArea() {
  const RECIPES_LIMIT = 12;
  const [recipes, setRecipes] = useState([]);
  const [area, setArea] = useState('');
  useEffect(() => {
    fetchApi(area === '' ? {} : { filterType: 'exArea', searchInput: area })
      .then((json) => setRecipes(json.meals));
  }, [area]);

  return (
    <section className="content-container">
      <Header title="Explorar Origem" />
      <AreaSelect
        onChange={ ({ target }) => { setArea(target.value); } }
        value={ area }
      />
      <section>
        <RecipesList
          recipes={ recipes.slice(0, RECIPES_LIMIT) }
          recipeType="comida"
        />
      </section>
      <Footer />
    </section>
  );
}
