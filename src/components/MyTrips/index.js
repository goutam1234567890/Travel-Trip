import Header from '../Header'
import EmptyCardView from '../EmptyCardView'
import {AppContext} from '../../context/AppProvider'
import './index.css'

const MyTrips = () => (
  <AppContext.Consumer>
    {({store, setStore}) => {
      const {list} = store

      // Function to handle cancellation of a trip
      const handleCancel = id => {
        const updatedList = list.filter(trip => trip.id !== id)
        setStore({...store, list: updatedList})
      }
      const showEmptyView = list.length === 0

      return (
        <>
          {showEmptyView ? (
            <EmptyCardView />
          ) : (
            <>
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
            </>
          )}
        </>
      )
    }}
  </AppContext.Consumer>
)

export default MyTrips
