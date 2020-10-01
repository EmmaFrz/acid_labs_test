import React, { Fragment } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../../resources/css/testStyles.css'

const PostWrapper = (props) => {
    return(
        <Fragment>
            <Modal open={props.isDeleted} onClose={() => props.closeModal()} center>
                <h4>Se ha creado el post correctamente</h4>
                <p>¿Deseas crear otro post?</p>
                <center>
                    <button className="distance buttonStyle buttonConfirm" onClick={() => props.closeModal()}>Aceptar</button>
                    <br /><br />
                    <button className="distance buttonStyle buttonCancel" onClick={() => props.returnFormModal()}>Regresar al Inicio</button>
                </center>
            </Modal>
        </Fragment>
    );
};

export default PostWrapper;