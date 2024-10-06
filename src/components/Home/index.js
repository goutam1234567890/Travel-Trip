import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'
import {AppContext} from '../../context/AppProvider'

const Home = () => (
  <AppContext.Consumer>
    {({resetState}) => (
      <>
        <div>
          <Header />
          <div className="home-page">
            <div className="home-image-container">
              <img
                src="https://res.cloudinary.com/dqhagljvz/image/upload/v1724328692/image_5.png"
                alt="travel-image"
                className="home-image-element"
              />
            </div>
            <div className="description-container">
              <h1 className="home-headings">Travel. Relax. Memories.</h1>
              <p className="home-description">
                With travel trip you can experience new travel and the best
                tourist destinations.
              </p>
              <div className="home-button-container">
                <Link to="/book-a-new-trip" onClick={resetState}>
                  <button type="button" className="home-Book-button">
                    Book a new trip
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </AppContext.Consumer>
)

export default Home
