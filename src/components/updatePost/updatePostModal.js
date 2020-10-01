import React, { Fragment } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../../resources/css/testStyles.css'

const PostModal = (props) => {
    return(
        <Fragment>
            <Modal open={props.isDeleted} onClose={() => props.returnFormModal()} center>
                <h4>Se ha actualizado el post correctamente</h4>
                <center>
                    <button className="distance buttonStyle buttonConfirm" onClick={() => props.returnFormModal()}>Aceptar</button>
                </center>
            </Modal>
        </Fragment>
    );
};

export default PostModal;