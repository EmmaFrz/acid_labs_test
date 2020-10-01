import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import Header from '../commons/header';
import Loader from '../commons/loader';
import NewPostForm from './newPostForm';
import NewPostModal from './newFormModal';
import 'react-responsive-modal/styles.css';
import '../../resources/css/testStyles.css'

const PostWrapper = (props) => {
    return(
        <Fragment>
            <Loader isLoading={props.isLoading} />
            <Header>
                <Link to='/'>Inicio</Link>
            </Header>
            <NewPostForm 
                formValue={props.formValue}
                handleChange={props.handleChange}
                createNewPost={props.createNewPost}
            />
            <NewPostModal 
                closeModal={props.closeModal}
                isDeleted={props.isDeleted}
                returnFormModal={props.returnFormModal}
            />
        </Fragment>
    );
};

export default PostWrapper;