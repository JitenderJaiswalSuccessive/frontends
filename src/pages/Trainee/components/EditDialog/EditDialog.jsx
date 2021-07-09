import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogContentText, InputAdornment, DialogActions,
  TextField,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import { Formik, Form } from 'formik';
import { EditSchema } from '../../../../validations/editVaidation';

export default class EditDialog extends PureComponent {
  constructor(props) {
    super(props);
    this.initialValues = {
      name: '',
      email: '',
    };
  }

  render() {
    const {
      open, onClose, onSubmit,
    } = this.props;
    return (
      <Dialog fullWidth maxWidth="md" open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Your Trainee Details
          </DialogContentText>
          <Formik
            initialValues={this.initialValues}
            onSubmit={onSubmit}
            validationSchema={EditSchema}
          >
            {(props) => (
              <Form>
                {JSON.stringify(props.values)}
                <div style={{ marginBottom: '20px' }}>
                  <TextField
                    name="name"
                    label="Name"
                    required
                    fullWidth
                    variant="outlined"
                    value={props.values.name}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={props.touched.name ? props.errors.name : ''}
                    error={props.touched.name && Boolean(props.errors.name)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <TextField
                    name="email"
                    label="Email Address"
                    fullWidth
                    variant="outlined"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={props.touched.email ? props.errors.email : ''}
                    error={props.touched.email && Boolean(props.errors.email)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <DialogActions>
                  <Button type="submit" onClick={onClose} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={!(props.isValid && props.dirty)} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    );
  }
}

EditDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
EditDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onSubmit: () => {},
};
