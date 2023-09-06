import React from "react";

function Home() {
  return (
    <>
      <>
        <div>Home Page</div>
      </>
      <div>
      <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card bg-primary-subtle">
            <div class="card-header text-center text-white bg-dark-subtle">
              <h1>Mahatma Gandhi</h1>
              <img class="card-img-top"
                src="data:image/jpeg;base64,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"
                alt="FREEDOM FIGHTERS" width="150px" height="100px" />
            </div>
            <div class="card-body bg-danger-subtle">
              <p>
                The immense sacrifices that Mohandas Karamchand Gandhi made for
                India earned him the title of “Father of the Nation”; he was
                born on October 2, 1869. Along with inspiring numerous other
                independence movements and human rights movements around the
                world, he not only helped lead India to independence but also
                played a significant role in its victory. India is recognized
                for embracing the concept of nonviolence thanks to Gandhi,
                popularly known as Bapu. He thought that nonviolent resistance
                and an unwillingness to cooperate with the British would be
                enough to bring about independence.
              </p>
            </div>
            <div class="card footer bg-secondary-subtle">
              <a class="btn btn-outline-success-subtle" href="https://en.wikipedia.org/wiki/Mahatma_Gandhi">Wikipedia</a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card bg-primary-subtle">
            <div class="card-header text-center text-white bg-secondary-subtle">
              <h2>Subhas Chandra Bose</h2>
              <img class="card-img-top"
                src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQgltU27MIHxxDXwtyhnBsZJq97_RG53WolfZfazivmu2a2RBZmzGOV_hIdLcml6ilMqGlCIzT8CNdMpgo"
                alt="FREEDOM FIGHTERS" width="150px" height="100px" />
            </div>
            <div class="card-body bg-warning-subtle">
              <p>
                One of the most successful Indian nationalists in history was Subhash Chandra Bose. He was created in
                Cuttack on January 23, 1897. He was widely referred to as Netaji. He was a fervent nationalist, and his
                unwavering patriotism made him a hero. Bose belonged to the radical faction of the Indian independence
                movement. He served as the head of a radical young wing of Congress from the beginning of the 1920s to
                the end of 1930. He is believed to have died in an aviation accident on August 18, 1945, although the
                cause of his passing is still unknown.
              </p>
            </div>
            <div class="card footer bg-secondary-subtle">
              <a class="btn btn-outline-success-subtle" href="https://en.wikipedia.org › wiki › Subhas_Chandra_Bose
              ">Wikipedia</a>
            </div>
          </div>
        </div>
      

        <div class="col-md-3">
          <div class="card bg-primary-subtle">
            <div class="card-header text-center text-white bg-secondary-subtle">
              <h2>Subhas Chandra Bose</h2>
              <img class="card-img-top"
                src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQgltU27MIHxxDXwtyhnBsZJq97_RG53WolfZfazivmu2a2RBZmzGOV_hIdLcml6ilMqGlCIzT8CNdMpgo"
                alt="FREEDOM FIGHTERS" width="150px" height="100px" />
            </div>
            <div class="card-body bg-warning-subtle">
              <p>
                One of the most successful Indian nationalists in history was Subhash Chandra Bose. He was created in
                Cuttack on January 23, 1897. He was widely referred to as Netaji. He was a fervent nationalist, and his
                unwavering patriotism made him a hero. Bose belonged to the radical faction of the Indian independence
                movement. He served as the head of a radical young wing of Congress from the beginning of the 1920s to
                the end of 1930. He is believed to have died in an aviation accident on August 18, 1945, although the
                cause of his passing is still unknown.
              </p>
            </div>
            <div class="card footer bg-secondary-subtle">
              <a class="btn btn-outline-success-subtle" href="https://en.wikipedia.org › wiki › Subhas_Chandra_Bose
              ">Wikipedia</a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card bg-primary-subtle">
            <div class="card-header text-center text-white bg-dark-subtle">
              <h1>Bhagat Singh</h1>
              <img class="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mZXNb660fWO207u7Vhb1dU-Oi49pLI2rmIs6tnZB0NLFBCqSui67yw0VP2onoq0oQCw&s"
                alt="FREEDOM FIGHTERS" width="150px" height="100px" />
            </div>
            <div class="card-body bg-primary-subtle">
              <p>
                On September 28, 1907, in Banga, Pakistan, Bhagat Singh was born. He was among the most extreme Indian
                liberation fighters. In the freedom struggle for India, he was a divisive but respected figure. His
                involvement in a plot to assassinate James Scott, a British police superintendent, in 1928 as vengeance
                for Lala Lajpat Rai’s demise was revealed. On March 23, 1931, the British executed this heroic Indian
                Freedom Fighters by hanging him at Lahore Central Jail in Lahore, Pakistan. He was only 23 years old at
                the time. He is well known by the name Shaheed Bhagat Singh.
              </p>
            </div>
            <div class="card footer bg-secondary-subtle">
              <a class="btn btn-outline-success-subtle" href="https://en.wikipedia.org › wiki › Subhas_Chandra_Bose
              ">Wikipedia</a>
            </div>
          </div>
        </div>

      </div>
    </div>
</div>
    </>
  );
}

export default Home;


// import React from "react";

// function Home() {
//   return (
//     <>
//       <>
//         <div>Home Page</div>
//       </>
//       </>
//   );
// }

// export default Home;
