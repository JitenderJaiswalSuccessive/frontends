import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '@material-ui/core';

export default class DeleteDialog extends PureComponent {
  render() {
    const {
      open, onClose, onSubmit,
    } = this.props;
    return (
      <Dialog fullWidth maxWidth="md" open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to remove the trainee?
          </DialogContentText>
          <DialogActions>
            <Button type="submit" onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={onSubmit} disabled={false} color="primary">
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

DeleteDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
DeleteDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onSubmit: () => {},
};
