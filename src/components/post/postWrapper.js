import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PostInfo from './postInfo';
import PostModal from './postModal';
import Header from '../commons/header';
import Loader from '../commons/loader';
import 'react-responsive-modal/styles.css';
import '../../resources/css/testStyles.css'

const PostWrapper = (props) => {
    return(
        <Fragment>
            <Loader isLoading={props.isLoading} />
            <Header>
                <Link to='/'>Inicio</Link>
            </Header>
            <PostInfo 
                post={props.post}
                modalHandler={props.modalHandler}
                redirectToUpdatePost={props.redirectToUpdatePost}
            />
            <PostModal 
                isDeleted={props.isDeleted}
                deletedMessage={props.deletedMessage}
                returnToHome={props.returnToHome}
                modalHandler={props.modalHandler}
                deletePost={props.deletePost}
                post={props.post}
            />
        </Fragment>
    );
};

export default PostWrapper;