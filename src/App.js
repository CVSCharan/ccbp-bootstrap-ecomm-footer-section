import "./App.css";

function App() {
  return (
    <div class="bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3 order-md-1 mt-3">
            <div class="card1 justify-content-md-start text-center">
              <div class="d-flex flex-row justify-content-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png"
                  class="img1"
                  alt="img1"
                />
              </div>
              <div class="d-flex flex-row justify-content-center">
                <div class="iconcard d-flex flex-column justify-content-center">
                  <i class="fab fa-google"></i>
                </div>
                <div class="iconcard d-flex flex-column justify-content-center">
                  <i class="fab fa-twitter"></i>
                </div>
                <div class="iconcard d-flex flex-column justify-content-center">
                  <i class="fab fa-instagram"></i>
                </div>
                <div class="iconcard d-flex flex-column justify-content-center">
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
              <p class="h1 text-md-left">
                37, Ayur Vigyan Nagar, New Delhi, INDIA.
              </p>
            </div>
          </div>

          <div class="col-6 col-md-6 col-lg-3 order-md-2">
            <div class="card2">
              <h1 class="h2">Get to know us</h1>
              <p class="p1">About us</p>
              <p class="p1">Career</p>
              <p class="p1">Press Releases</p>
              <p class="p1">Gift a smile</p>
            </div>
          </div>

          <div class="col-6 col-md-6 col-lg-3 order-md-3">
            <div class="card2">
              <h1 class="h2">Contact with Us</h1>
              <p class="p1">Facebook</p>
              <p class="p1">Twitter</p>
              <p class="p1">Instagram</p>
            </div>
          </div>

          <div class="col-6 col-md-6 col-lg-3 order-md-4">
            <div class="card2">
              <h1 class="h2">Let Us Help You</h1>
              <p class="p1">100% Purchase</p>
              <p class="p1">Protection</p>
              <p class="p1">Your Account</p>
              <p class="p1">Return Centre</p>
              <p class="p1">Help</p>
            </div>
          </div>
          <div class="col-12 order-md-5">
            <div class="ftcard">
              <hr style={{ backgroundColor: "#5a7184" }} />
              <div class="d-flex flex-row justify-content-center">
                <i class="far fa-copyright cicon"></i>
                <p class="p1">2020 by Rahul. Created with Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
