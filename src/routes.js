// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/newjob",
    name: "New Job",
    icon: <DocumentIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/myjobs",
    name: "My Jobs",
    
    icon: <RocketIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/alljobs",
    name: "All Jobs",
    
    icon: <GlobeIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
   
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/clients",
    name: "Clients",
    
    icon: <StatsIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: <PersonIcon color="inherit" />,
    component: Profile,
    layout: "/admin",
  },
  
  // {
  //   name: "MORE PAGES",
  //   category: "account",
    
  //   state: "pageCollapse",
  //   views: [
      // {
      //   path: "/profile",
      //   name: "Profile",
      //   rtlName: "لوحة القيادة",
      //   icon: <PersonIcon color="inherit" />,
      //   secondaryNavbar: true,
      //   component: Profile,
      //   layout: "/admin",
      // },
      // {
      //   path: "/profile",
      //   name: "Users",
        
      //   icon: <PersonIcon color="inherit" />,
      //   secondaryNavbar: true,
      //   component: Profile,
      //   layout: "/admin",
      // },
      // {
      //   path: "/signin",
      //   name: "Sign In",
      //   rtlName: "لوحة القيادة",
      //   icon: <DocumentIcon color="inherit" />,
      //   component: SignIn,
      //   layout: "/auth",
      // },
      
  //   ],
  // },
];
export default dashRoutes;
