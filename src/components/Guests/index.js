import {Component} from 'react'
import {AppContext} from '../../context/AppProvider'
import './index.css'
import Header from '../Header'
import SideBarComponent from '../SideBarComponent'

class Guests extends Component {
  // state = {step: 3, adults: 1, children: 0, infants: 0}

  moveToDateSelection = () => {
    // this.setState({step: 2})
  }

  moveToTravelAssitance = () => {
    // this.setState({step: 4})
  }

  render() {
    return (
      <AppContext.Consumer>
        {({store, setStore, incrStep, decrStep}) => {
          const {adults, children, infants} = store.guests
          const incrementAdultsCount = event => {
            event.preventDefault()
            const updatedGuests = {
              ...store.guests,
              adults: adults + 1,
            }
            setStore({guests: updatedGuests})
          }

          const decrementAdultsCount = event => {
            event.preventDefault()
            if (adults !== 1) {
              const updatedGuests = {
                ...store.guests,
                adults: adults - 1,
              }
              setStore({guests: updatedGuests})
            }
          }

          const decrementChildrenCount = event => {
            event.preventDefault()
            if (children !== 0) {
              const updatedGuests = {
                ...store.guests,
                children: children - 1,
              }
              setStore({guests: updatedGuests})
            }
          }
          const incrementChildrenCount = event => {
            event.preventDefault()
            const updatedGuests = {
              ...store.guests,
              children: children + 1,
            }
            setStore({guests: updatedGuests})
          }

          const decrementInfantsCount = event => {
            event.preventDefault()
            if (infants !== 0) {
              const updatedGuests = {
                ...store.guests,
                infants: infants - 1,
              }
              setStore({guests: updatedGuests})
            }
          }
          const incrementInfantsCount = event => {
            event.preventDefault()
            const updatedGuests = {
              ...store.guests,
              infants: infants + 1,
            }
            setStore({guests: updatedGuests})
          }

          return (
            <div>
              <Header />
              <div className="BookTrip-container">
                <div className="slectionAndDetails-container">
                  <SideBarComponent />
                  <div className="details-container">
                    <div className="heading-container">
                      <h1 className="date-heading">Guests</h1>
                      <p className="date-paragraph">Select your guests.</p>
                    </div>
                    <form className="form-container">
                      <div className="guest-container">
                        <div className="guest-outer-container">
                          <div className="guest-inner1-container">
                            <p className="guest-innerheading">Adults</p>
                            <p className="guest-innerparagraph">
                              Age 13 or above
                            </p>
                          </div>
                          <div className="guest-inner2-container">
                            <button
                              type="button"
                              className="guest-minus"
                              onClick={decrementAdultsCount}
                            >
                              -
                            </button>
                            <p className="guest-number">{adults}</p>
                            <button
                              type="button"
                              className="guest-plus"
                              onClick={incrementAdultsCount}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="guest-outer-container">
                          <div className="guest-inner1-container">
                            <p className="guest-innerheading">Children</p>
                            <p className="guest-innerparagraph">Age 2-12</p>
                          </div>
                          <div className="guest-inner2-container">
                            <button
                              type="button"
                              className="guest-minus"
                              onClick={decrementChildrenCount}
                            >
                              -
                            </button>
                            <p className="guest-number">{children}</p>
                            <button
                              type="button"
                              className="guest-plus"
                              onClick={incrementChildrenCount}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="guest-outer-container">
                          <div className="guest-inner1-container">
                            <p className="guest-innerheading">Infants</p>
                            <p className="guest-innerparagraph">under 2</p>
                          </div>
                          <div className="guest-inner2-container">
                            <button
                              type="button"
                              className="guest-minus"
                              onClick={decrementInfantsCount}
                            >
                              -
                            </button>
                            <p className="guest-number">{infants}</p>
                            <button
                              type="button"
                              className="guest-plus"
                              onClick={incrementInfantsCount}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="guest-buttons-container">
                          <button
                            type="button"
                            onClick={decrStep}
                            className="guest-previous-button"
                          >
                            Previous
                          </button>
                          <button
                            type="button"
                            onClick={incrStep}
                            className="guest-next-button"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Guests
