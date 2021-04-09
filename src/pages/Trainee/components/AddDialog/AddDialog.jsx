import React, { PureComponent } from 'react';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogContentText, InputAdornment, DialogActions,
  TextField,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Formik, Form } from 'formik';
import { SignInSchema } from '../../../../validations/validation';

export default class AddDialog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.initialValues = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  onClose = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

   onSubmit = (values) => {
     // eslint-disable-next-line no-console
     console.log('values', values);
     this.setState((prevState) => ({
       open: !prevState.open,
     }));
   }

   render() {
     const { open } = this.state;
     return (
       <div>
         <Button onClick={this.onClose} variant="outlined" size="large" color="primary">
           ADD TRAINEE
         </Button>

         <Dialog fullWidth maxWidth="md" open={open} onClose={this.onClose} aria-labelledby="form-dialog-title">
           <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
           <DialogContent>
             <DialogContentText>
               Enter Your Trainee Detail
             </DialogContentText>
             <Formik
               initialValues={this.initialValues}
               onSubmit={this.onSubmit}
               validationSchema={SignInSchema}
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
                   <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                     <div style={{ width: '48%' }}>
                       <TextField
                         name="password"
                         label="Password"
                         fullWidth
                         variant="outlined"
                         value={props.values.password}
                         onChange={props.handleChange}
                         onBlur={props.handleBlur}
                         helperText={props.touched.password ? props.errors.password : ''}
                         error={props.touched.password && Boolean(props.errors.password)}
                         InputProps={{
                           startAdornment: (
                             <InputAdornment position="start">
                               <VisibilityOffIcon />
                             </InputAdornment>
                           ),
                         }}
                       />
                     </div>
                     <div style={{ width: '48%' }}>
                       <TextField
                         name="confirmPassword"
                         label="Confirm Password"
                         fullWidth
                         variant="outlined"
                         value={props.values.confirmPassword}
                         onChange={props.handleChange}
                         onBlur={props.handleBlur}
                         helperText={props.touched.confirmPassword ? props.errors.confirmPassword : ''}
                         // eslint-disable-next-line max-len
                         error={props.touched.confirmPassword && Boolean(props.errors.confirmPassword)}
                         InputProps={{
                           startAdornment: (
                             <InputAdornment position="start">
                               <VisibilityOffIcon />
                             </InputAdornment>
                           ),
                         }}
                       />
                     </div>
                   </div>
                   <DialogActions>
                     <Button type="submit" color="primary">
                       Cancel
                     </Button>
                     <Button type="sumit" disabled={!(props.isValid && props.dirty)} color="primary">
                       Submit
                     </Button>
                   </DialogActions>
                 </Form>
               )}
             </Formik>
           </DialogContent>
         </Dialog>
       </div>
     );
   }
}
