import React from 'react';
import { connect } from 'react-redux';
import { updateModal } from '../../Actions/modalActions';
import './index.sass';


/**
 * Generic Modal
 *
 * @param {boolean} status Status Modal
 * @param {html} element Children Component
 * @param {boolean} isLoader Status Loader for asynchronous task
 * @param {boolean} customSize Modal Custom Size, default = 600px
 *
 * behavior :
 *
 * import { updateModal } from 'Actions/modalActions';
 *
 * this.props.updateModal({ payload : { status : true , element : <Component/> } }) Open Modal
 *
 */

const Modal = ({ element, status, customSize, title, updateModal }) => (
  <div className={`modal-main ${status ? 'modal-main--active' : ''} `}>
    <div className="modal-main__backdrop">
      <div container spacing={0} className={`modal-main__content modal-main__content--${customSize} `}>
        <div container spacing={0} className="modal-main_header">
          <div item xs={4} className="modal-main_title">{title}</div>
          <div item xs={7} className="modal-main_close" onClick={() => updateModal({ payload: { status: false } })}>X</div>
        </div>
        <div container spacing={0} className="modal-main__children">
          {element}
        </div>
      </div>
    </div>
  </div>
);

const mS = ({
  modalReducer: { status, element, isLoader, customSize, title }
}) => ({
  status,
  element,
  isLoader,
  customSize,
  title,
});

const mD = {
  updateModal
}

export default connect(mS,mD)(Modal);
