import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomeHeader from '../components/homeHeader/homeHeader'
import HotDishes from '../containers/Food Containers/hotDishes'
import ColdDishes from '../containers/Food Containers/coldDishes'
import Soup from '../containers/Food Containers/soup'
import Grill from '../containers/Food Containers/grill'
import Appetizer from '../containers/Food Containers/appetizer'
import Dessert from '../containers/Food Containers/dessert'
import Order from '../containers/Order/order'
import { useState } from 'react';
import Overlay from '../containers/overlay/Overlay';

const HomePage = (props) => {
  const {onAdd,onAdd1,onAdd2,onAdd3,onAdd4,onAdd5,resItems} = props
  const [drawerState, setDrawerState] = useState(false)
  return (
    <Router>
      <div className='container-left'>
        <div>
          <HomeHeader />
        </div>

        <Switch>
          <div className='row'>
            <Route path="/hotDishes">
              <HotDishes onAdd={onAdd3}/>
            </Route>
            <Route path="/coldDishes">
              <ColdDishes onAdd={onAdd}/>
            </Route>
            <Route path="/soup">
              <Soup onAdd={onAdd1}/>
            </Route>
            <Route path="/grill">
              <Grill onAdd={onAdd2}/>
            </Route>
            <Route path="/appetizer">
              <Appetizer onAdd={onAdd5}/>
            </Route>
            <Route path="/dessert">
              <Dessert onAdd={onAdd4}/>
            </Route>
          </div>
        </Switch>
      </div>

      <div className='container-right'>
        <Order resItems={resItems} drawerState={drawerState} setDrawerState={setDrawerState}/>
        <Overlay  drawerState={drawerState}  setDrawerState={setDrawerState}/>
      </div>

    </Router>


  )
}

export default HomePage;