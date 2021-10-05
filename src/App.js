import React, { useState, useMemo } from "react";

// contexts
import { EstateContext, InitiateEstateDefault } from "./context/EstateContext";
import { UserContext, InitiateUserDefault } from "./context/UserContext";
import { ShowContext, InitializeShowDefault } from "./context/ShowContext";
import { TermsContext, InitializeTermsDefault } from "./context/TermsContext";

// custom components
import Home from "./pages/Home";
import LogInHelp from "./pages/LogInHelp";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";

export default function App() {
   const [interests, setInterests] = useState(InitiateEstateDefault());
   const interestValue = useMemo(
      () => ({ interests, setInterests }),
      [interests]
   );

   const [user, setUser] = useState(InitiateUserDefault());
   const userValue = useMemo(() => ({ user, setUser }), [user]);

   const [show, setShow] = useState(InitializeShowDefault());
   const showValue = useMemo(() => ({ show, setShow }), [show]);

   const [terms, setTerms] = useState(InitializeTermsDefault());
   const termsValue = useMemo(() => ({ terms, setTerms }), [terms]);

   const [loggedIn, setLoggedIn] = useState(false);

   return (
      <>
         <EstateContext.Provider value={interestValue}>
            <UserContext.Provider value={userValue}>
               <ShowContext.Provider value={showValue}>
                  <TermsContext.Provider value={termsValue}>
                     {!terms && <LogInHelp /> }
                     {terms && <Home />}
                  </TermsContext.Provider>
               </ShowContext.Provider>
            </UserContext.Provider>
         </EstateContext.Provider>
      </>
   );
}
