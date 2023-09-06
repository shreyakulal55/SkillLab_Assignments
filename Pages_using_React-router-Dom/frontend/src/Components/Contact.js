// rfce

import React from "react";

function Contact() {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        CONTACT US
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" href="#">
            NAME:ME
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            PHONE NUMBER:12335531563
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;


// import React from "react";

// function Contact() {
//   return (
//     CONTACT US
//     );
//   }
//   export default Contact;