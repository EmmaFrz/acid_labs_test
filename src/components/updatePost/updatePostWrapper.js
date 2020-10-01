import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import UpdatePostForm from './updatePostForm';
import UpdatePostModal from './updatePostModal';
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
                <Link to={`/post/${props.formValue.id}`} className="distance">Regresar</Link>
            </Header>
            <UpdatePostForm 
                formValue={props.formValue}
                handleChange={props.handleChange}
                updatePost={props.updatePost}
            />
            <UpdatePostModal 
                isDeleted={props.isDeleted}
                returnFormModal={props.returnFormModal}
            />
        </Fragment>
    );
};

export default PostWrapper;