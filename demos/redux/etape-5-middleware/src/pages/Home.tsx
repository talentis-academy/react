// @ts-ignore
import phoneImg from "../assets/phone.png";
// @ts-ignore
import tvImg from "../assets/tv.png";
// @ts-ignore
import cameraImg from "../assets/camera.png";

import { buyPhone, buyTV, buyCamera } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { apiCall } from "../store/comments/actions";

function Home() {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const phone = useSelector((state: any) => state.phone);
  const camera = useSelector((state: any) => state.camera);
  const tv = useSelector((state: any) => state.tv);
  const comments = useSelector((state: any) => state.comments);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
  };

  useEffect(() => {
    // Utiliser l'action thunk pour charger les commentaires
    dispatch(apiCall());
  }, []);

  return (
    <div>
      <h2>{"Welcome to our Application"}</h2>
      <div className="page">
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
        <div className="comments-section">
          {comments.isLoading ? (
            <div>Chargement des commentaires...</div>
          ) : comments.error ? (
            <div>Erreur: {comments.error}</div>
          ) : (
            <div className="comments-list">
              {comments.comments.length > 0 ? (
                comments.comments
                  .slice(0, 10)
                  .map((comment: any, index: number) => (
                    <div key={comment.id || index} className="comment">
                      <div className="comment-name">
                        {comment.name || comment.email}
                      </div>
                      <div className="comment-body">{comment.body}</div>
                    </div>
                  ))
              ) : (
                <div>Aucun commentaire disponible</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
