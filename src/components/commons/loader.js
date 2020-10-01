import React from 'react';
import Svg from '../../resources/assets/spinner.svg';
import '../../resources/css/testStyles.css'

function Loader(props) {
    return (
        <div>
            {props.isLoading && <img src={Svg} className='spinner' alt="svg"/>}
        </div>
    );
  }
  
  export default Loader;
  