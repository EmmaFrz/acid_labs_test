import React, { Fragment } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../../resources/css/testStyles.css'

const PostModal = (props) => {
    return(
        <Fragment>
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

export default PostModal;