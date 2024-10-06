import {Link} from 'react-router-dom'
import Header from '../Header'
import {AppContext} from '../../context/AppProvider'
import './index.css'

const MyTrips = () => (
  <AppContext.Consumer>
    {({resetState, store, setStore}) => {
      const {list} = store

      // Function to handle cancellation of a trip
      const handleCancel = id => {
        const updatedList = list.filter(trip => trip.id !== id)
        setStore({...store, list: updatedList})
      }

      if (list.length === 0) {
        return (
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
        )
      }

      return (
        <div>
          <Header />
          <div className="mytrips-list-container">
            <h1 className="myTrips-heading">My Trips</h1>
            <div className="myTrips-map-container">
              {list.map(eachItem => (
                <div className="myTrips-listItem" key={eachItem.id}>
                  <h1 className="myTrips-endLocation">
                    {eachItem.endLocation}
                  </h1>
                  <div className="mytrips-date-container">
                    <p className="myTrips-date">Date</p>
                    <p className="myTrips-startendDate">
                      {eachItem.startDate} to {eachItem.endDate}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="myTrips-button"
                    onClick={() => handleCancel(eachItem.id)}
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }}
  </AppContext.Consumer>
)

export default MyTrips
