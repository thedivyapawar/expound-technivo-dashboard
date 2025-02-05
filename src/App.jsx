import { lazy, Suspense } from "react";
const Navbar = lazy (()=> import ( "./components/Navbar"));
import { createBrowserRouter, Outlet } from "react-router-dom";
const LeadView = lazy (()=> import (  "./view/LeadView"));
const HomeView = lazy (()=> import (  "./view/HomeView"));
const CompanyView = lazy (()=> import (  "./view/CompanyView"));
const MeetView = lazy (()=> import (  "./view/MeetView"));
const ProfileView = lazy (()=> import (  "./view/ProfileView"));
const TeamView = lazy (()=> import (  "./view/TeamView"));
const WorkView = lazy (()=> import ( "./view/WorkView"));

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export const myRoutes = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    children: [ 
      {
        path : "/",
        element : <Suspense><LeadView/></Suspense>
      },   
      {
        path : "/home",
        element : <Suspense><HomeView/></Suspense>
      },
      {
        path : "/lead",
        element : <Suspense><LeadView/></Suspense>
     },
     {
        path : "/company",
        element : <Suspense><CompanyView/></Suspense>
      },
      {
        path : "/meet",
        element : <Suspense><MeetView/></Suspense>
      },
      {
        path : "/profile",
        element : <Suspense><ProfileView/></Suspense>
      },
      {
        path : "/team",
        element : <Suspense><TeamView/></Suspense>
      },
      {
        path : "/work",
        element : <Suspense><WorkView/></Suspense>
      },
    ] 
  }
])
export default App;