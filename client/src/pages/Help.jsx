// import React from "react";

// import React from 'react';
import "../styles/help.css"; // Import your custom CSS file for styling

function HelpCenter() {
  return (
    <div className="help-center">
      <h1>IQAC Mailer Help Center</h1>

      <nav>
        <ul>
          <li>
            <a href="#scheduling">Scheduling and Overlap Avoidance</a>
          </li>
          <li>
            <a href="#faq">Frequently Asked Questions (FAQs)</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="scheduling">
          <h2>Scheduling and Overlap Avoidance</h2>
          <p>
            The IQAC mailer system is designed to prevent scheduling conflicts
            for student events. Here`s how it works:
          </p>
          <ul>
            <li>
              When a new event is submitted, the system checks for existing
              events scheduled for the same date and time.
              <ul>
                <li>
                  If no conflicts are found, the event is added to the schedule
                  and a confirmation email is sent to the organizer.
                </li>
                <li>
                  If a conflict is detected, the organizer receives an email
                  notification highlighting the overlap and suggesting
                  alternative dates or times.
                </li>
              </ul>
            </li>
            <li>
              Organizers can also check for potential conflicts before
              submitting an event by using the system`s calendar or scheduling
              tool (if available).
            </li>
          </ul>
        </section>

        <section id="faq">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <ul>
            <li>
              <b>Q: What happens if my event conflicts with another one?</b>
              <br />
              A: You`ll receive an email notification suggesting alternative
              dates or times to avoid the conflict.
            </li>
            <li>
              <b>
                Q: How can I check for potential conflicts before submitting an
                event?
              </b>
              <br />
              A: The system may offer a calendar or scheduling tool to help you
              visualize available slots. If unsure, contact the system
              administrator for guidance.
            </li>
            <li>
              <b>
                Q: Can I request a specific date and time for my event, even if
                it conflicts with another one?
              </b>
              <br />
              A: It depends on your institution`s policies. In some cases, you
              might be able to request special permission, but priority will
              likely be given to non-conflicting events.
            </li>
            {/* Add more FAQs as needed */}
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>
            If you have any further questions or require assistance, please
            contact:
          </p>
          <ul>
            <li>
              IQAC Mailer System Administrator (email:{" "}
              <a href="mailto:iqac@bitsathy.ac.in">
                iqacmailer@yourinstitution.edu
              </a>
              )
            </li>
            {/* Add additional contact information if applicable */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default HelpCenter;
