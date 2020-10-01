import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../resources/css/testStyles.css'

const HomeList = (props) => {
    return(
        <Fragment>
            <div className={'containerPosts'}>
                {props.posts.slice(0,12).map( (data, idx) => {
                    return (
                        <center key={idx}>
                            <Link to={`/post/${data.id}`}>
                                <h5>
                                    {data.title}
                                </h5>
                                <img src={props.images[Math.floor(Math.random()*30)].urls.small} alt={idx} width={100} height={100} />
                            </Link>
                        </center>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default HomeList;