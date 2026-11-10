// @ts-ignore
import phoneImg from "../assets/phone.png";
// @ts-ignore
import tvImg from "../assets/tv.png";
// @ts-ignore
import cameraImg from "../assets/camera.png";

// Attention : encore les anciennes actions de actions.ts, pas celles du slice (corrigé à l'étape 7)
import { buyPhone, buyTv, buyCamera } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // useDispatch envoie les actions ; useSelector lit le state (re-render quand il change)
  const dispatch = useDispatch();
  const phone = useSelector((state: any) => state.phone);
  const tv = useSelector((state: any) => state.tv);
  const camera = useSelector((state: any) => state.camera);
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
