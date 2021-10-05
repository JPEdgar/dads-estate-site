import React, { useState, useContext } from "react";

// libraries
import { Container, Row, Button, InputGroup } from "react-bootstrap";

// contexts
import { TermsContext } from "../context/TermsContext";

// custom components
import Help from "../components/Help";
import About from "../components/About";

export default function LogInHelp() {
   const { terms, setTerms } = useContext(TermsContext);
   const [checked, setChecked] = useState(false);

   const toggleChecked = () => {
      setChecked((curr) => !curr);
   };

   return (
      <Container>
         <h1>About the Site</h1>
         <About />
         <h1>Help Section</h1>
         <Help />
         {!terms && (
            <Row className="my-3">
               <InputGroup>
                  <InputGroup.Checkbox
                     checked={checked}
                     onChange={toggleChecked}
                  />
                  <InputGroup.Text>
                     I read and understand the long-ass rant above.
                  </InputGroup.Text>
                  <Button disabled={!checked} onClick={() => setTerms(true)}>
                     Proceed
                  </Button>
               </InputGroup>
            </Row>
         )}
      </Container>
   );
}
