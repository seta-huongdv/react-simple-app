import React from 'react';
import { bool, func, string, shape } from 'prop-types';
import styles from './styles.scss';

export default class Example extends React.Component {
  static propTypes = {
    currentCase: shape({
      id: string
    }),
    newButtonClick: func,
    hideInfoIcon: bool,
    handleOpenUpload: func,
    handleOpenNoteForm: func,
    isActiveCase: bool
  };
  static defaultProps = {};

  render() {
    

    return (
      <div className="testClass">
          <h1>Example component</h1>
      </div>
    );
  }
}

// export default connect(
//   state => ({
//     currentCase: selectCurrentCase(state),
//     isActiveCase: selectIsActiveCase(state)
//   }),
//   {
//     handleOpenUpload: () => showUploadFormByUploadButton('upload'),
//     handleOpenNoteForm: () => ({
//       type: SET_NOTE_FORM_MODAL_OPEN,
//       payload: { isOpen: true, noteModel: {} }
//     })
//   }
// )(TopBar);
