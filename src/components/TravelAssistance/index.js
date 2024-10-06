import {Component} from 'react'
import {AppContext} from '../../context/AppProvider'
import './index.css'
import Header from '../Header'
import SideBarComponent from '../SideBarComponent'

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

class TravelAssistance extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({store, setStore, incrStep, decrStep}) => {
          const {isChecked, selectedValue} = store.travelAssistance

          const handleCheckboxChange = () => {
            const updatedTravelAssistence = {
              ...store.travelAssistance,
              isChecked: !isChecked,
            }
            setStore({travelAssistance: updatedTravelAssistence})
          }
          const handleSelection = event => {
            const updatedTravelAssistance = {
              ...store.travelAssistance,
              selectedValue: event.target.value,
            }
            setStore({travelAssistance: updatedTravelAssistance}) // Corrected here
          }

          return (
            <div>
              <Header />
              <div className="BookTrip-container">
                <div className="slectionAndDetails-container">
                  <SideBarComponent />
                  <div className="details-container">
                    <div className="travelAssistance-heading-container">
                      <h1 className="travelAssistance-heading">
                        Travel Assistance
                      </h1>
                      <p className="travelAssistance-paragraph">
                        Select your travel assistance
                      </p>
                    </div>
                    <div className="Ta-form-container">
                      <div className="TravelAssistance-container">
                        <div className="checkbox-container">
                          <input
                            type="checkbox"
                            className="checkbox-input"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            id="checkbox"
                          />
                          <label className="checkbox-label" htmlFor="checkbox">
                            Travel Assistance Needed
                          </label>
                        </div>
                        {isChecked && (
                          <div className="checkbox-container1">
                            <label
                              htmlFor="travel-assistance-select"
                              className="label"
                            >
                              Travel Assistance
                            </label>
                            <select
                              id="travel-assistance-select"
                              className="select"
                              onChange={handleSelection}
                              value={selectedValue}
                            >
                              {travelAssistanceList.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.displayText}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                        <div className="TravelAssistance-buttons-container">
                          <button
                            type="button"
                            onClick={decrStep}
                            className="TravelAssistance-previous-button"
                          >
                            Previous
                          </button>
                          <button
                            type="button"
                            onClick={incrStep}
                            className="TravelAssistance-next-button"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default TravelAssistance
