const BUY_PHONE = "BUY_PHONE";

const buyPhone = (quantity) => {
  return {
    type: BUY_PHONE,
    // payload : la donnée envoyée avec l'action (ici la quantité choisie)
    payload: quantity,
  };
};

const BUY_TV = "BUY_TV";

const buyTv = () => {
  return {
    type: BUY_TV,
  };
};

const BUY_CAMERA = "BUY_CAMERA";

const buyCamera = () => {
  return {
    type: BUY_CAMERA,
  };
};

export { BUY_PHONE, buyPhone, BUY_TV, buyTv, BUY_CAMERA, buyCamera };
