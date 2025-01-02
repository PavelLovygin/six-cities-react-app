import {AllCities} from '../../consts.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import clsx from 'clsx';
import {setCity} from '../../store/actions.ts';


export function CitiesList(){
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.City);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {AllCities.map((city) =>
          (
            <li className="locations__item" key={city.name}>
              <a
                className={clsx('locations__item-link', 'tabs__item', currentCity.name === city.name && 'tabs__item--active')}
                onClick={() => dispatch(setCity(city))}
              >
                <span>{city.name}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
