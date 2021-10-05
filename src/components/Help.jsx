import React from "react";

// libraries
import { Row } from "react-bootstrap";

export default function Help() {
   return (
      <div>
         <Row>
            <h3>Log In</h3>
            <h5>Personal Information</h5>
            <p>
               Please enter your first and last name in the appropriate fields,
               and provide a contact phone number and an email address for
               recipt of interests.
            </p>
            <p>Clicking "Log in" will save that data on your local machine.</p>
            <h5>Data Storage and Use</h5>
            <p>
               Personal data will only be stored on your machine.{" "}
               <b>
                  No information will be stored anywhere else or used beyond the
                  use of the estate.
               </b>
            </p>
            <p>
               If you've already logged on and data is stored, extra buttons
               will be available to you on the log in window. You can click
               "Load User" to load previous information, or "Delete User" to
               remove the data from your system.
            </p>
            <p>
               <b>Note:</b> This is <i>not</i> a secured log in. I purposely
               left out authentication for ease of use for you all. If the ease
               is abused in any way, I will impliment an authentication system
               and require anyone wanting anything from the estate to have a
               Gmail account.
            </p>
            <h3>Using the Website</h3>
            <h5>Navigation</h5>
            <p>
               The website is broken down into floors, rooms, sections, and your
               individual interests. (Note: since there is no authentication or
               log in, your interests will <i>not</i> be saved after you
               submit.) You can quickly navigate to a specific section with the
               use of the navigation bar at the top. That navbar <i>should</i>{" "}
               remain at the top of the screen so for ease of use. If the screen
               is too small, the navigation bar will be collapsed into a box
               with three parallel horizontal lines. Clicking that will open the
               menu.
            </p>
            <h5>Sections and Interests</h5>
            <p>
               Every picture that turns your mouse pointer from an arrow into a
               magnifying glass can be clicked to either zoom in or enlarge the
               picutre <i>in a separate browser tab.</i>
            </p>
            <p>
               On the right-hand side of each room is a blueprint sketch with
               the room highlighted. Hopefully that'll help you navigate through
               the house and get your bearings.
            </p>
            <p>
               In each room are pictures of different sections in the room.
               These pictures can and will change as things shift around, so
               keep that in mind as you return to the website.
            </p>
            <p>
               If you see something you're interested in, click the "+ Add
               Interest" button. That will bring up a small text field for you
               to enter some information.
            </p>
            <p>
               Helpful information would be something like, "Circular magnent on
               fridge door." There is no need to put any location information
               (such as floor, room, ect...) in your description. With how I
               built the website and broke down the house, everything will
               automatically be stored.
            </p>
            <p>
               <b>Please have one item of interest per line.</b>
            </p>
            <p>
               If you accidentally added an interest text box or just want to
               delete one, click the "delete" button next to the row to remove
               that text area. Please try to keep things as clean as possible.
               Remove any unneeded interests.
            </p>
            <h5>Submit Interests</h5>
            <p>
               Once you're done browsing through everything and expressing any
               interests on things you wish to keep, click on "Submit Interests"
               in the top-right corner. You'll get a summary of every interest
               you expressed in a modal window.
            </p>
            <p>
               If you kept your interests clean, you'll see the floor, the room,
               the picture, and the description of your interest in a row-by-row
               layout. You can return to the website to continue browsing by
               clicking "Close" in the top-right of the modal.
            </p>
            <p>
               Once you've reviewed your interests, at the bottom will be two
               buttons -- "Return" and "Submit."
            </p>
            <p>
               Clicking "Return" will close the modal and return you to the
               website to add/remove/edit any interests you find on the website.
            </p>
            <p>
               Clicking "Submit" will complete the process. An email will be
               sent to me and to the email address provided.
            </p>
            <p>
               You are not limited to one email or browse-through of the house.
            </p>
            <p>
               <b>
                  The pictures will be updated as things get shifted around,
                  cleaned, and emptied.
               </b>
            </p>
            <h5>After Submitting</h5>
            <p>
               I will have an online spreadsheet available to those in the
               estate. This spreadsheet will have all interests available to
               review. That way, you can see what you've expressed interest in,
               as well as what everyone else has. In addition, everything is
               open and transperant.
            </p>
            <p>
               <b>There will be exceptions!</b> Dad has some things individually
               bequeathed, or has wishes/plans for certain items. That means
               some things won't be available.
            </p>
            <h1>Final Note:</h1>
            <p>
               As mentioned before, you are responsible for transporting any and
               all items you wish to hold onto. Consider that when you're
               browsing through the website and expressing your interests in
               things around the house.
            </p>
         </Row>
      </div>
   );
}
