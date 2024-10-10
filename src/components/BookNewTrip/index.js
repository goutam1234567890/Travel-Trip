import {Component} from 'react'
import Header from '../Header'
import DateSelection from '../DateSelection'
import {AppContext} from '../../context/AppProvider'
import Guests from '../Guests'
import TravelAssistance from '../TravelAssistance'
import Confirmation from '../Confirmation'
import Successful from '../Successful'
import SideBarComponent from '../SideBarComponent'
import './index.css'

class BookNewTrip extends Component {
  state = {
    errorMessageName: false,
    errorMessageStartLocation: false,
    errorMessageEndLocation: false,
  }

  // Rendering Name field with Context consumer
  renderNameField = () => (
    <AppContext.Consumer>
      {({store, setStore}) => {
        const {name} = store.bookNewTrip

        const updateName = event => {
          const updatedBookNewTrip = {
            ...store.bookNewTrip,
            name: event.target.value,
          }
          setStore({bookNewTrip: updatedBookNewTrip})
        }

        const onChangeBlur = () => {
          if (name === '') {
            this.setState({errorMessageName: true})
          } else {
            this.setState({errorMessageName: false})
          }
        }

        return (
          <div className="booknewtrip-name-container">
            <label className="booknewtrip-name-label" htmlFor="Name">
              Name
            </label>
            <br />
            <input
              type="text"
              id="Name"
              onChange={updateName}
              value={name}
              placeholder="Enter name"
              className="booknewtrip-input-name"
              onBlur={onChangeBlur}
            />
          </div>
        )
      }}
    </AppContext.Consumer>
  )

  // Rendering Start Location field
  renderStartLocationField = () => (
    <AppContext.Consumer>
      {({store, setStore}) => {
        const {startLocation} = store.bookNewTrip

        const updateStartLocation = event => {
          const updatedBookNewTrip = {
            ...store.bookNewTrip,
            startLocation: event.target.value,
          }
          setStore({bookNewTrip: updatedBookNewTrip})
        }

        const onChangeBlur = () => {
          if (startLocation === '') {
            this.setState({errorMessageStartLocation: true})
          } else {
            this.setState({errorMessageStartLocation: false})
          }
        }

        return (
          <div className="booknewtrip-name-container">
            <label className="booknewtrip-name-label" htmlFor="start-location">
              Start Location
            </label>
            <br />
            <input
              type="text"
              id="start-location"
              onChange={updateStartLocation}
              value={startLocation}
              placeholder="Enter start location"
              className="booknewtrip-input-name"
              onBlur={onChangeBlur}
            />
          </div>
        )
      }}
    </AppContext.Consumer>
  )

  // Rendering End Location field
  renderEndLocationField = () => (
    <AppContext.Consumer>
      {({store, setStore}) => {
        const {endLocation} = store.bookNewTrip

        const updateEndLocation = event => {
          const updatedBookNewTrip = {
            ...store.bookNewTrip,
            endLocation: event.target.value,
          }
          setStore({bookNewTrip: updatedBookNewTrip})
        }

        const onChangeBlur = () => {
          if (endLocation === '') {
            this.setState({errorMessageEndLocation: true})
          } else {
            this.setState({errorMessageEndLocation: false})
          }
        }

        return (
          <div className="booknewtrip-name-container">
            <label className="booknewtrip-name-label" htmlFor="end-location">
              End Location
            </label>
            <br />
            <input
              type="text"
              id="end-location"
              onChange={updateEndLocation}
              value={endLocation}
              placeholder="Enter end location"
              className="booknewtrip-input-name"
              onBlur={onChangeBlur}
            />
          </div>
        )
      }}
    </AppContext.Consumer>
  )

  // Method to validate the form fields
  validateFields = () => {
    this.setState(prevState => ({
      errorMessageName: prevState.name === '',
      errorMessageStartLocation: prevState.startLocation === '',
      errorMessageEndLocation: prevState.endLocation === '',
    }))
  }

  handleNextClick = (store, incrStep) => {
    const {name, startLocation, endLocation} = store.bookNewTrip

    // Validate fields
    if (name === '') {
      this.setState({errorMessageName: true})
    }
    if (startLocation === '') {
      this.setState({errorMessageStartLocation: true})
    }
    if (endLocation === '') {
      this.setState({errorMessageEndLocation: true})
    }

    // Proceed to the next step if all fields are valid
    if (name !== '' && startLocation !== '' && endLocation !== '') {
      incrStep()
    }
  }

  render() {
    const {errorMessageName} = this.state
    return (
      <AppContext.Consumer>
        {({store, incrStep}) => {
          if (store.step === 2) return <DateSelection />
          if (store.step === 3) return <Guests />
          if (store.step === 4) return <TravelAssistance />
          if (store.step === 5) return <Confirmation />
          if (store.step === 6) return <Successful />

          if (store.step === 1) {
            const {
              errorMessageStartLocation,
              errorMessageEndLocation,
            } = this.state
            return (
              <>
                <div>
                  <Header />
                  <div className="BookTrip-container">
                    <div className="slectionAndDetails-container">
                      <SideBarComponent />
                      <div className="details-container">
                        <div className="heading-container">
                          <h1 className="heading-details">Your Details</h1>
                          <p className="paragraph-details">
                            Enter your name and location details
                          </p>
                        </div>
                        <div className="booknewtrip-yourDetails-container">
                          {this.renderNameField()}
                          {errorMessageName && (
                            <p className="errormsg">Enter Your Name</p>
                          )}
                          {this.renderStartLocationField()}
                          {errorMessageStartLocation && (
                            <p className="errormsg">
                              Enter your start location
                            </p>
                          )}
                          {this.renderEndLocationField()}
                          {errorMessageEndLocation && (
                            <p className="errormsg">Enter your end location</p>
                          )}
                          <div className="booknewtrip-button-container">
                            <button
                              type="button"
                              className="booknewtrip-button-text"
                              onClick={() =>
                                this.handleNextClick(store, incrStep)
                              }
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }

          return null
        }}
      </AppContext.Consumer>
    )
  }
}

export default BookNewTrip
