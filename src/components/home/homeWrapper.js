import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/header';
import Loader from '../commons/loader';
import HomeList from './homeList';
import HomeTitle from './homeTitle';
import '../../resources/css/testStyles.css'

const HomeWrapper = (props) => {
    return(
        <Fragment>
            <Loader isLoading={props.isLoading} />
            <Header>
                <Link to='/new'>Nuevo Post</Link>
            </Header>
            <HomeTitle />
            <HomeList 
                images={props.images}
                posts={props.posts}
            />
        </Fragment>
    );
};

export default HomeWrapper;