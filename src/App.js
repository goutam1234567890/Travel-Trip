import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import BookNewTrip from './components/BookNewTrip'
import MyTrips from './components/MyTrips'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AppProvider from './context/AppProvider'
import StepComponent from './components/StepComponent'
import FooterComponent from './components/FooterComponent'

import './App.css'

class App extends Component {
  render() {
    return (
      <AppProvider>
        <StepComponent />
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookNewTrip}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <FooterComponent />
      </AppProvider>
    )
  }
}
export default App
