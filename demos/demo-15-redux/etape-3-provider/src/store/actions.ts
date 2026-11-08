// Action Types

const BUY_PHONE = "BUY_PHONE";
const BUY_TV = "BUY_TV";
const BUY_CAMERA = "BUY_CAMERA";

const buyPhone = () => {
  return {
    type: BUY_PHONE,
  };
};

const buyTV = () => {
  return {
    type: BUY_TV,
  };
};

const buyCamera = () => {
  return {
    type: BUY_CAMERA,
  };
};

export { BUY_PHONE, BUY_TV, BUY_CAMERA, buyPhone, buyTV, buyCamera };
