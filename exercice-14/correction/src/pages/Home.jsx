import phoneImg from "../assets/phone.svg";
import tvImg from "../assets/tv.svg";
import cameraImg from "../assets/camera.svg";

import { useState } from "react";
import { useShopStore } from "../store/shopStore";

function Home() {
  // Un state par champ quantité (un input donne toujours du texte : on le met en nombre)
  const [phoneQuantity, setPhoneQuantity] = useState(1);
  const [tvQuantity, setTvQuantity] = useState(1);
  const [cameraQuantity, setCameraQuantity] = useState(1);

  // Un selector par stock : le composant ne se re-rend que si ce qu'il lit change
  const phones = useShopStore((state) => state.phones);
  const tvs = useShopStore((state) => state.tvs);
  const cameras = useShopStore((state) => state.cameras);
  // Les actions : un seul selector (l'objet actions ne change jamais)
  const { buyPhone, buyTV, buyCamera } = useShopStore((state) => state.actions);

  return (
    <div>
      <h2>{"Welcome to our Application"}</h2>
      <div className="container">
        <div className="item">
          <img src={phoneImg} alt="" width={100} height={100} />
          <div className="availability" id="phones">
            {phones} available
          </div>
          <div className="quantity">
            <input
              className="input"
              type="number"
              min="1"
              max={phones}
              defaultValue={1}
              onChange={(e) => setPhoneQuantity(Number(e.target.value))}
            />
          </div>
          <button className="button" onClick={() => buyPhone(phoneQuantity)}>
            Buy
          </button>
        </div>
        <div className="item">
          <img src={tvImg} alt="" width={100} height={100} />
          <div className="availability" id="tvs">
            {tvs} available
          </div>
          <div className="quantity">
            <input
              className="input"
              type="number"
              min="1"
              max={tvs}
              defaultValue={1}
              onChange={(e) => setTvQuantity(Number(e.target.value))}
            />
          </div>
          <button className="button" onClick={() => buyTV(tvQuantity)}>
            Buy
          </button>
        </div>
        <div className="item">
          <img src={cameraImg} alt="" width={100} height={100} />
          <div className="availability" id="cameras">
            {cameras} available
          </div>
          <div className="quantity">
            <input
              className="input"
              type="number"
              min="1"
              max={cameras}
              defaultValue={1}
              onChange={(e) => setCameraQuantity(Number(e.target.value))}
            />
          </div>
          <button className="button" onClick={() => buyCamera(cameraQuantity)}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
