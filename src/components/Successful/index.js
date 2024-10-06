import {Link} from 'react-router-dom'
import {AppContext} from '../../context/AppProvider'
import './index.css'
import Header from '../Header'
import SideBarComponent from '../SideBarComponent'

// const Successful = ({resetState, incrStep}) => (
//   <AppContext.Consumer>
//     {() => {
//       return (
//         <div>
//           <Header />
//           <div className="BookTrip-container">
//             <div className="slectionAndDetails-container">
//               <SideBarComponent></SideBarComponent>
//               <div className="details-container">
//                 <div className="successful-form-container">
//                   <div className="successful-container">
//                     <img
//                       src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
//                       alt="successful"
//                       className="successful-image"
//                     />
//                     <h1 className="successful-heading">Awesome!</h1>
//                     <p className="successful-paragraph">
//                       your booking has been confirmed.
//                     </p>
//                     <Link
//                       to="/book-a-new-trip"
//                       onClick={() => {
//                         incrStep()
//                         resetState()
//                       }}
//                     >
//                       <button type="button" className="successful-button">
//                         Book a New Trip
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     }}
//   </AppContext.Consumer>
// )

// export default Successful

const Successful = () => (
  <AppContext.Consumer>
    {({resetState, incrStep}) => (
      <div>
        <Header />
        <div className="BookTrip-container">
          <div className="slectionAndDetails-container">
            <SideBarComponent />
            <div className="details-container">
              <div className="successful-form-container">
                <div className="successful-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                    alt="Success"
                    className="successful-image"
                  />
                  <h1 className="successful-heading">Awesome</h1>
                  <p className="successful-paragraph">
                    Your booking has been confirmed
                  </p>
                  <Link
                    to="/book-a-new-trip"
                    onClick={() => {
                      incrStep()
                      resetState()
                    }}
                  >
                    <button type="button" className="successful-button">
                      Book a New Trip
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </AppContext.Consumer>
)

export default Successful
