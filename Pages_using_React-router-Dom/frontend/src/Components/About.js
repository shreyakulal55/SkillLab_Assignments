import React from "react";

function About() {
  return (
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              ABOUT US
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">THIS IS ABOUT THIS PAGE... </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;




// import React from "react";

// function About() {
//   return (
//     <>
//     ABOUT US
//     </>
//       );
//     }
    
//     export default About;