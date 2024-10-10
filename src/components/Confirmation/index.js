// import React from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from '../../context/AppProvider' // Assuming you're exporting AppContext
import './index.css'
import Header from '../Header'
import SideBarComponent from '../SideBarComponent'

const Confirmation = () => (
  <AppContext.Consumer>
    {({store, resetState, incrStep, saveTrip}) => {
      const guestNumber = () =>
        store.guests.adults + store.guests.children + store.guests.infants

      return (
        <div>
          <Header />
          <div className="BookTrip-container">
            <div className="slectionAndDetails-container">
              <SideBarComponent />
              <div className="details-container">
                <div className="confiramtion-headings-container">
                  <h1 className="confirmation-heading">Confirmation</h1>
                  <p className="confirmation-paragraph">Confirm your details</p>
                </div>
                <div className="Confirmation-form-container">
                  <div className="cnofirmation-details">
                    <div className="confiramtion-name">
                      <p className="name-element">Name</p>
                      <p className="name-value">{store.bookNewTrip.name}</p>
                    </div>
                    <div className="confiramtion-startLocation">
                      <p className="name-element">Start Location</p>
                      <p className="startLocation-value">
                        {store.bookNewTrip.startLocation}
                      </p>
                    </div>
                    <div className="confiramtion-endLocation">
                      <p className="name-element">End Location</p>
                      <p className="endLocation-value">
                        {store.bookNewTrip.endLocation}
                      </p>
                    </div>
                    <div className="confiramtion-startDate">
                      <p className="name-element">Start Date</p>
                      <p className="startDate-value">
                        {store.dateSelection.startDate}
                      </p>
                    </div>
                    <div className="confiramtion-endDate">
                      <p className="name-element">End Date</p>
                      <p className="endDate-value">
                        {store.dateSelection.endDate}
                      </p>
                    </div>
                    <div className="confiramtion-guests">
                      <p className="name-element">Guests</p>
                      <p className="guest-value">{guestNumber()}</p>
                    </div>
                    <div className="confiramtion-travel">
                      <p className="name-element">Travel Assistance</p>
                      <p className="travel-value">
                        {store.travelAssistance.selectedValue}
                      </p>
                    </div>
                  </div>
                  <div className="confirmation-button-container">
                    <Link to="/book-a-new-trip">
                      <button
                        type="button"
                        className="confirmation-cancel-button"
                        onClick={resetState}
                      >
                        Cancel
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="confirmation-confirm-button"
                      onClick={() => {
                        incrStep()
                        saveTrip()
                      }}
                    >
                      Confirm
                    </button>
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

export default Confirmation
