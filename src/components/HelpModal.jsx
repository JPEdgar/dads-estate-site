import React from "react";

// libraries
import { Modal, Button } from "react-bootstrap";

// custom components
import Help from "./Help";

export default function HelpModal({ showHelp, setShowHelp }) {
   return (
      <div>
         <Modal show={showHelp} centered size="md">
            <Modal.Header closeButton>
               <Modal.Title>Help Section</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Help />
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={() => setShowHelp(false)}>Close Help</Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}
