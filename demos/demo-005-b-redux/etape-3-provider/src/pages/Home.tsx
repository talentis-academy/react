// @ts-ignore
import phoneImg from "../assets/phone.png";
// @ts-ignore
import tvImg from "../assets/tv.png";
// @ts-ignore
import cameraImg from "../assets/camera.png";

import { store } from "../store/store";
import { buyPhone, buyTV, buyCamera } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  // useDispatch envoie les actions ; useSelector lit le state (re-render quand il change)
  const dispatch = useDispatch();
  const phone = useSelector((state: any) => state.phone);
  const camera = useSelector((state: any) => state.camera);
  const tv = useSelector((state: any) => state.tv);

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
              dispatch(buyPhone());
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
              dispatch(buyTV());
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
              dispatch(buyCamera());
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
