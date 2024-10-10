import {withRouter} from 'react-router-dom'
import {AppContext} from '../../context/AppProvider'
import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details', id: 1},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection', id: 2},
  {stepId: 'GUESTS', displayText: 'Guests', id: 3},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance', id: 4},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation', id: 5},
]

const SideBarComponent = props => {
  const {location} = props

  const renderStepIndicator = (itemId, step, displayText) => {
    if (itemId === step) {
      return <span className="lg-span-id active2">{itemId}</span>
    }
    if (step > itemId) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          className="lg-span-id1"
          alt={displayText}
        />
      )
    }
    // No need for 'else'; simply return for the default case
    return <span className="lg-span-id">{itemId}</span>
  }

  return (
    <AppContext.Consumer>
      {({store}) => {
        const {step} = store

        if (location.pathname === '/book-a-new-trip') {
          return (
            <div className="lg-ulist-container">
              <ul className="lg-ulist">
                {stepsList.map(item => (
                  <li key={item.id} className="bar" id={item.id}>
                    {renderStepIndicator(item.id, step, item.displayText)}

                    <span
                      className={`lg-span-displayText ${
                        step === item.id ? 'active3' : ''
                      }`}
                    >
                      {item.displayText}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
        // Return null or an empty fragment if the condition is not met
        return null // Or you can return <></> for an empty render
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(SideBarComponent)
