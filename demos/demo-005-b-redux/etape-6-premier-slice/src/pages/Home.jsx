import phoneImg from "../assets/phone.png";
import tvImg from "../assets/tv.png";
import cameraImg from "../assets/camera.png";

// buyPhone vient du slice ; buyTv et buyCamera encore des anciennes actions
import { buyPhone } from "../store/phoneSlice";
import { buyTv, buyCamera } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // useDispatch envoie les actions ; useSelector lit le state (re-render quand il change)
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.phone);
  const tv = useSelector((state) => state.tv);
  const camera = useSelector((state) => state.camera);
  return (
    <div>
      <h2>{"Welcome to our Application"}</h2>
      <div className="container">
        <div className="item">
          <img src={phoneImg} alt="" width={100} height={100} />
          <div className="availability">{phone.total} available</div>
          <button className="button" onClick={() => dispatch(buyPhone(2))}>
            Buy
          </button>
        </div>
        <div className="item">
          <img src={tvImg} alt="" width={100} height={100} />
          <div className="availability">{tv.total} available</div>
          <button className="button" onClick={() => dispatch(buyTv())}>
            Buy
          </button>
        </div>{" "}
        <div className="item">
          <img src={cameraImg} alt="" width={100} height={100} />
          <div className="availability">{camera.total} available</div>
          <button className="button" onClick={() => dispatch(buyCamera())}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
