import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import Signup from './pages/signup/Signup'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import Newpassword from './pages/forgotpassword/Newpassword'
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import User from './pages/users/User'
import UserPage from './pages/myp/userPage'
import Userloans from './pages/myp/userLoans'
import EditProduct from '././components/edit/Editproduct'
import { productInputs, userInputs } from "./formSource";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loan from "./pages/loans/Loan"
import Addloan from './pages/loans/Addloan';
import Viewloan from './pages/loans/Viewloan'
import Addproduct from './pages/list/Addproduct'
import Landing from './pages/LandingPage/Landing';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
        <Route
        path="/new/:userId"
                element={<New inputs={userInputs} title="Add New User" />}
              />
               <Route path="/view/:id" element={<UserPage/>}/>
               <Route path="/products" element={<List/>}/>
               <Route path="/loans" element={<Loan/>}/>
               <Route path="/addloan" element={<Addloan/>}/>
               <Route path="/addproduct" element={<Addproduct/>}/>
               <Route path="/edit/:id" element={<EditProduct/>}/>
               <Route path="/viewloan/:id" element={<Viewloan/>}/>
               <Route path="/userloans/:phone" element={<Userloans/>} />
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup/>} />
            <Route path = "forgotpassword" element= {<Forgotpassword/>} />
            <Route path = "newpassword" element= {<Newpassword/>} />
            <Route path=":userId" element={<Single />}/>
            <Route path="users" element={<User/>} />
           

            {/* <Route path="users">
              <Route index element={<List />} />
         
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route> */}
            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
