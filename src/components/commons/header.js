import React, { Fragment } from 'react';
import '../css/testStyles.css'

const Header = (props) => {
    return(
        <Fragment>
            <div className="header">
                {props.children}
            </div>
        </Fragment>
    );
};

export default Header;