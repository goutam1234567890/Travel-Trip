import {withRouter} from 'react-router-dom'
import {AppContext} from '../../context/AppProvider'
import './index.css'

const StepComponent = props => {
  const {location} = props

  return (
    <AppContext.Consumer>
      {({store}) => {
        const {step} = store
        if (location.pathname === '/book-a-new-trip') {
          return (
            <ul className="ulist">
              {[1, 2, 3, 4, 5].map(num => (
                <li
                  key={num}
                  className={`bar ${step === num ? 'active' : ''}`}
                  id={num}
                />
              ))}
            </ul>
          )
        }
        // Return null or an empty fragment if the condition is not met
        return null // or return <></>;
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(StepComponent)
