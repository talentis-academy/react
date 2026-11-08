import phoneImg from "../assets/phone.png";
import tvImg from "../assets/tv.png";
import cameraImg from "../assets/camera.png";
import { buyPhone, buyTV, buyCamera, store } from "../store/index.js";
function Home() {
  const state = store.getState();
  const { phone, tv, camera } = state;

  return (
    <div>
      <h2>{"Welcome to our Application"}</h2>
      <div className="container">
        <div className="item">
          <img src={phoneImg} alt="" width={100} height={100} />
          <div className="availability" id="phones">
            {phone.total} available
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
          <img src={tvImg} alt="" width={100} height={100} />
          <div className="availability" id="tvs">
            {tv.total} available
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
          <img src={cameraImg} alt="" width={100} height={100} />
          <div className="availability" id="cameras">
            {camera.total} available
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
