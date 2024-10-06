<div className="sm-booknewtrip-yourDetails-container">
                  <h1 className="sm-booknewtrip-heading-details">
                    Your Details
                  </h1>
                  <p className="sm-booknewtrip-paragraph-details">
                    Enter your name and location details
                  </p>
                  {this.renderNameField()}
                  {errorMessageName && (
                    <p className="errormsg">Enter Your Name</p>
                  )}
                  {this.renderStartLocationField()}
                  {this.state.errorMessageStartLocation && (
                    <p className="errormsg">Enter your start location</p>
                  )}
                  {this.renderEndLocationField()}
                  {this.state.errorMessageEndLocation && (
                    <p className="errormsg">Enter your end location</p>
                  )}
                  <div className="sm-booknewtrip-button-container">
                    <button
                      type="button"
                      className="sm-booknewtrip-button-text"
                      onClick={incrStep}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <Header />
                <div className="desktop-BookTrip-container">
                  <div className="slectionAndDetails-container">
                    <SideBarComponent></SideBarComponent>
                    <div className="details-container">
                      <div className="heading-container">
                        <h1 className="heading-details">Your Details</h1>
                        <p className="paragraph-details">
                          Enter your name and location details
                        </p>
                      </div>
                      <form className="lg-yourDetails-form-container">
                        {this.renderLgNameField()}
                        {errorMessageName && (
                          <p className="errormsg">Enter Your Name</p>
                        )}
                        {this.renderLgStartLocationField()}
                        {this.state.errorMessageStartLocation && (
                          <p className="errormsg">Enter your start location</p>
                        )}
                        {this.renderLgEndLocationField()}
                        {this.state.errorMessageEndLocation && (
                          <p className="errormsg">Enter your end location</p>
                        )}
                        <button
                          className="next-button"
                          type="button"
                          onClick={incrStep}
                        >
                          Next
                        </button>
                      </form>
                    </div>
                  </div>
                </div>