import {Link} from 'react-router-dom'
import {AppContext} from '../../context/AppProvider'
import Header from '../Header'
import './index.css'

const EmptyCardView = () => (
  <AppContext.Consumer>
    {({resetState}) => (
      <>
        <div>
          <Header />
          <div className="mytrips-container">
            <img
              src="https://res.cloudinary.com/dqhagljvz/image/upload/v1726481432/Frame_1000003903_ikif4u.png"
              className="mytrips-image"
              alt="no trips"
            />
            <h1 className="mytrips-heading">No upcoming trips</h1>
            <p className="mytrips-paragraph">
              When you book a trip, you will see your trip details here.
            </p>
            <Link to="/book-a-new-trip" onClick={resetState}>
              <button type="button" className="mytrips-button">
                Book a new trip
              </button>
            </Link>
          </div>
        </div>
      </>
    )}
  </AppContext.Consumer>
)

export default EmptyCardView
