import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/header';
import Loader from '../commons/loader';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../../resources/css/testStyles.css'

const PostWrapper = (props) => {
    return(
        <Fragment>
            <Loader isLoading={props.isLoading} />
            <Header>
                <Link to='/'>Inicio</Link>
            </Header>
            <center>
                <div className="containerPost">
                    <h3>Datos del Post</h3>
                    <h5>{props.post.title}</h5>
                    <p>{props.post.body}</p>
                </div>
                <button className="distance buttonStyle buttonDelete" onClick={() => props.modalHandler()}>Borrar Post</button>
                <button className="distance buttonStyle buttonConfirm" onClick={() => props.redirectToUpdatePost(props.post.id)}>Actualizar Post</button>
            </center>
            <Modal open={props.isDeleted} onClose={() => props.deletedMessage ? props.returnToHome() : props.modalHandler()} center>
                {!props.deletedMessage ? 
                    <div>
                        <h4>¿Estás Seguro que deseas borrar este post?</h4>
                        <center>
                            <button className="distance buttonStyle buttonDelete" onClick={() => props.deletePost(props.post.id)}>Aceptar</button>
                            <br /><br />
                            <button className="distance buttonStyle buttonCancel" onClick={() => props.modalHandler()}>Cancelar</button>
                        </center>
                    </div>
                :
                    <div>
                        <h4>¡El post se ha borrado con exito!</h4>
                        <center>
                            <button className="distance buttonStyle buttonDelete" onClick={() => props.returnToHome()}>Regresar</button>
                        </center>
                    </div>
                }
            </Modal>
        </Fragment>
    );
};

export default PostWrapper;