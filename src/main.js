import React from "react";



import Photo from "./componets/foto/photo";

const Main = () => {
  return (
    <>
      
      <Photo count={10} file={require('./assets/images/canada.jpg')} />
      <Photo count={13} file={require('./assets/images/italia.jpg')} />
      <Photo count={15} file={require('./assets/images/bali.jpg')} />
      <Photo count={15} file={require('./assets/images/franca.jpg')} />

    </>

  )
}

export default Main