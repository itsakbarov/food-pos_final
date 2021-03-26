import Home from "../pages/HomePage";
import Dashboard from "../pages/DashboardPage";
import Chart from "../pages/Chart";
import Messages from "../pages/Messages";
 import Discount from "../pages/Discount";
import Settings from "../pages/Settings";
import LogOut from "../pages/LogOut";

import Notification from "../pages/Notification";
import { Route, Switch } from "react-router-dom";

export const SettingsRoutes = [
  {
    path: '/hotdishes',
    title: 'Hot Dishes'
  },
  {
    path: '/colddishes',
    title: 'Cold Dishes'
  },
  {
    path: '/soup',
    title: 'Soup'
  },
  {
    path: '/grill',
    title: 'Grill'
  },
  {
    path: '/appetizer',
    title: 'Appetizer'
  },
  {
    path: '/dessert',
    title: 'Dessert'
  },
]

const router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/chart" component={Chart} />
      <Route path="/discount" component={Discount} />
      <Route path="/messages" component={Messages} />
      <Route path="/notifications" component={Notification} />
      <Route path="/settings" component={Settings} />
      <Route path="/logout" component={LogOut} />
    </Switch>
  );
};

export default router;
