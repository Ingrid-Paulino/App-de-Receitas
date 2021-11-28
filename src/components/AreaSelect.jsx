import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchApi from '../utils/FetchApi';

export default function AreaSelect({ onChange, value }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetchApi({ recipeType: 'comida', filterType: 'area', searchInput: 'list' })
      .then((json) => setAreas(json.meals.map((meal) => meal.strArea)));
  }, []);

  return (
    <select
      onChange={ onChange }
      value={ value }
      data-testid="explore-by-area-dropdown"
    >
      <option key="" value="" data-testid="All-option">All</option>
      { areas.map((area) => (
        <option key={ area } value={ area } data-testid={ `${area}-option` }>
          { area }
        </option>
      )) }
    </select>
  );
}

AreaSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
