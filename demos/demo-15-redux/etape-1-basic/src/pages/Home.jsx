import phone from "../assets/phone.png";
import tv from "../assets/tv.png";
import camera from "../assets/camera.png";

import { buyPhone, buyTV, buyCamera, store } from "../store/index.js";
function Home() {
  const state = store.getState();
  return (
    <div>
      <h2>{"Welcome to our Application"}</h2>
      <div className="container">
        <div className="item">
          <img src={phone} alt="" width={100} height={100} />
          <div className="availability" id="phones">
            {state.phones} available
          </div>
          <button
            className="button"
            onClick={() => {
              store.dispatch(buyPhone());
            }}
          >
            Buy
          </button>
        </div>
        <div className="item">
          <img src={tv} alt="" width={100} height={100} />
          <div className="availability" id="tvs">
            {state.tvs} available
          </div>
          <button
            className="button"
            onClick={() => {
              store.dispatch(buyTV());
            }}
          >
            Buy
          </button>
        </div>
        <div className="item">
          <img src={camera} alt="" width={100} height={100} />
          <div className="availability" id="cameras">
            {state.cameras} available
          </div>
          <button
            className="button"
            onClick={() => {
              store.dispatch(buyCamera());
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
