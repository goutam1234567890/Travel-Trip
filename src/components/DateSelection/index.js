import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {AppContext} from '../../context/AppProvider'
import Header from '../Header'
import SideBarComponent from '../SideBarComponent'

class DateSelection extends Component {
  state = {
    errorMsgStartDate: false,
    errorMsgEndDate: false,
    dateError: false,
  }

  onChangeStartDateInput = event => {
    this.setState({startDateInput: event.target.value})
  }

  onchangeBlurStartDate = () => {
    const {startDateInput} = this.state
    if (startDateInput === '') {
      this.setState({errorMsgStartDate: true})
    }
    if (startDateInput !== '') {
      this.setState({errorMsgStartDate: false})
    }
  }

  onchangeBlurEndDate = () => {
    const {endDateInput} = this.state
    if (endDateInput === '') {
      this.setState({errorMsgEndDate: true})
    }
    if (endDateInput !== '') {
      this.setState({errorMsgEndDate: false})
    }
  }

  validateFields = () => {
    this.setState(prevState => ({
      errorMsgStartDate: prevState.startDate === '',
      errorMsgEndDate: prevState.endDate === '',
    }))
  }

  handleNextClick = (store, incrStep) => {
    const {startDate, endDate} = store.dateSelection

    // Validate fields
    if (startDate === '') {
      this.setState({errorMsgStartDate: true})
    }
    if (endDate === '') {
      this.setState({errorMsgEndDate: true})
    }

    // Proceed to the next step if all fields are valid
    if (startDate !== '' && endDate !== '') {
      incrStep()
    }
  }

  moveToUserDetails = () => {
    // this.setState({step: 1})
  }

  moveToGuestDetails = () => {
    // this.setState({step: 3})
  }

  render() {
    const {errorMsgStartDate, errorMsgEndDate, dateError} = this.state

    return (
      <AppContext.Consumer>
        {({store, setStore, incrStep, decrStep}) => {
          const {startDate, endDate} = store.dateSelection
          const updateStartDate = event => {
            const updatedDateSelection = {
              ...store.dateSelection,
              startDate: event.target.value,
            }
            setStore({dateSelection: updatedDateSelection})
          }
          const updateEndDate = event => {
            const updatedDateSelection = {
              ...store.dateSelection,
              endDate: event.target.value,
            }
            if (updatedDateSelection.endDate < updatedDateSelection.startDate) {
              this.setState({dateError: true})
            } else {
              this.setState({dateError: false})
              setStore({dateSelection: updatedDateSelection})
            }
          }

          const onChangeBlurStartDate = () => {
            if (startDate === '') {
              this.setState({errorMsgStartDate: true})
            } else {
              this.setState({errorMsgStartDate: false})
            }
          }

          const onChangeBlurEndDate = () => {
            if (endDate === '') {
              this.setState({errorMsgEndDate: true})
            } else {
              this.setState({errorMsgEndDate: false})
            }
          }
          return (
            <div>
              <Header />
              <div className="BookTrip-container">
                <div className="slectionAndDetails-container">
                  <SideBarComponent />
                  <div className="details-container">
                    <div className="heading-container">
                      <h1 className="date-heading">Date Selection</h1>
                      <p className="date-paragraph">
                        Select your Start and End Date.
                      </p>
                    </div>
                    <div className="dateSelection-yourDetails-container">
                      <div className="dateSelection-container">
                        <div className="startDate-container">
                          <label htmlFor="startDate" className="startDate">
                            Start Date
                          </label>
                          <br />
                          <input
                            id="startDate"
                            type="date"
                            value={startDate}
                            onChange={updateStartDate}
                            className="startDate-input"
                            onBlur={onChangeBlurStartDate}
                          />
                        </div>
                        {errorMsgStartDate && (
                          <p className="errorMsg">Select start date</p>
                        )}
                        <div className="startDate-container">
                          <label htmlFor="endDate" className="startDate">
                            End Date
                          </label>
                          <br />
                          <input
                            id="endDate"
                            className="startDate-input"
                            type="date"
                            value={endDate}
                            onChange={updateEndDate}
                            onBlur={onChangeBlurEndDate}
                          />
                        </div>
                        {errorMsgEndDate && (
                          <p className="errorMsg">Select end date</p>
                        )}
                        {dateError && (
                          <p className="errorMsg">
                            The end date cannot be less than the start date
                          </p>
                        )}
                        <div className="buttons-container">
                          <Link
                            to="/book-a-new-trip"
                            onClick={this.moveToUserDetails}
                          >
                            <button
                              type="button"
                              onClick={decrStep}
                              className="previous-button"
                            >
                              Previous
                            </button>
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              this.handleNextClick(store, incrStep)
                            }
                            className="dateselection-next-button"
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

export default DateSelection
