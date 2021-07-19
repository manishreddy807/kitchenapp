import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Cart from './components/Cart'
import RestaurantItems from './components/RestaurantItems'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/protectedRoute'
import PaymentSuccess from './components/PaymentSuccess'
import Home from './components/Home'
import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute
          path="/restaurants-list/:id"
          component={RestaurantItems}
        />

        <ProtectedRoute
          path="/cart/payment-success"
          component={PaymentSuccess}
        />

        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
