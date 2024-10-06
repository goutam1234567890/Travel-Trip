import {createContext, Component} from 'react'

// Create a Context for global state
export const AppContext = createContext()

class AppProvider extends Component {
  constructor(props) {
    super(props)

    // Initialize state
    this.state = {
      bookNewTrip: {
        name: '',
        startLocation: '',
        endLocation: '',
      },
      dateSelection: {
        startDate: '',
        endDate: '',
      },
      guests: {
        adults: 1,
        children: 0,
        infants: 0,
      },
      travelAssistance: {
        isChecked: false,
        selectedValue: '',
      },
      step: 1,
      list: [],
    }
  }

  saveTrip = () => {
    const {bookNewTrip, dateSelection, list} = this.state
    const newTrip = {
      endLocation: bookNewTrip.endLocation,
      startDate: dateSelection.startDate,
      endDate: dateSelection.endDate,
      id: new Date(),
    }
    const updatedList = [...list, newTrip]
    this.setState({
      list: updatedList,
    })
  }

  setStore = obj => {
    this.setState(prevState => ({
      ...prevState,
      ...obj,
    }))
  }

  resetState = () => {
    this.setState(prevState => ({
      ...prevState, // Spread the previous state to keep all other properties
      bookNewTrip: {
        name: '',
        startLocation: '',
        endLocation: '',
      },
      dateSelection: {
        startDate: '',
        endDate: '',
      },
      guests: {
        adults: 1,
        children: 0,
        infants: 0,
      },
      travelAssistance: {
        isChecked: false,
        selectedValue: '',
      },
      step: 1,
    }))
  }

  incrStep = () => {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }))
  }

  decrStep = () => {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }))
  }

  renderChildren = () => {
    const {children} = this.props
    return children
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          store: this.state,
          setStore: this.setStore,
          incrStep: this.incrStep,
          decrStep: this.decrStep,
          resetState: this.resetState,
          saveTrip: this.saveTrip,
        }}
      >
        {this.renderChildren()}
      </AppContext.Provider>
    )
  }
}

export default AppProvider
