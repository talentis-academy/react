import phoneImg from "../assets/phone.svg";
import tvImg from "../assets/tv.svg";
import cameraImg from "../assets/camera.svg";

function Home() {
  // TODO (exercice) : un state par champ quantité (useState), comme dans la démo Redux
  // TODO (exercice) : lire les stocks et les actions dans le store Zustand (useShopStore)
  return (
    <div>
      <h2>{"Welcome to our Application"}</h2>
      <div className="container">
        <div className="item">
          <img src={phoneImg} alt="" width={100} height={100} />
          <div className="availability" id="phones">
            5 available
          </div>
          <div className="quantity">
            <input className="input" type="number" min="1" defaultValue={1} />
          </div>
          <button className="button">Buy</button>
        </div>
        <div className="item">
          <img src={tvImg} alt="" width={100} height={100} />
          <div className="availability" id="tvs">
            3 available
          </div>
          <div className="quantity">
            <input className="input" type="number" min="1" defaultValue={1} />
          </div>
          <button className="button">Buy</button>
        </div>
        <div className="item">
          <img src={cameraImg} alt="" width={100} height={100} />
          <div className="availability" id="cameras">
            8 available
          </div>
          <div className="quantity">
            <input className="input" type="number" min="1" defaultValue={1} />
          </div>
          <button className="button">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
