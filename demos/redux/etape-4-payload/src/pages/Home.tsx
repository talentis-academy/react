// @ts-ignore
import phoneImg from "../assets/phone.png";
// @ts-ignore
import tvImg from "../assets/tv.png";
// @ts-ignore
import cameraImg from "../assets/camera.png";

import { buyPhone, buyTV, buyCamera } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Home() {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const phone = useSelector((state: any) => state.phone);
  const camera = useSelector((state: any) => state.camera);
  const tv = useSelector((state: any) => state.tv);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
  };

  return (
    <div>
      <h2>{"Welcome to our Application"}</h2>
      <div className="container">
        <div className="item">
          <img src={phoneImg} alt="" width={100} height={100} />
          <div className="availability" id="phones">
            {phone.total} available
          </div>
          <div className="quantity">
            <input
              className="input"
              type="number"
              min="1"
              max={phone.total}
              defaultValue={1}
              onChange={handleChange}
            />
          </div>
          <button
            className="button"
            onClick={() => {
              dispatch(buyPhone(quantity));
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
          <div className="quantity">
            <input
              className="input"
              type="number"
              min="1"
              max={phone.total}
              defaultValue={1}
              disabled
            />
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
          <div className="quantity">
            <input
              className="input"
              type="number"
              min="1"
              max={phone.total}
              defaultValue={1}
              disabled
            />
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
