import {FavoritesOfferCardList} from '../../components/favorites/favorite-city-section.tsx';
import {Offer} from '../../components/offers/card/offer-card.tsx';

type FavoritesProps = {
  Offers: Offer[];
}

export function Favorites(props: FavoritesProps) {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesOfferCardList Offers={props.Offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>

  );
}
