import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import trainees from './data/trainee';
import { GenericTable } from '../../components';
import { AddDialog, EditDialog, DeleteDialog } from './components';

export default class TraineeList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      edit: false,
      del: false,
      orderBy: '',
      order: 'asc',
      page: 0,
      rowsPerPage: 5,
      count: 100, // trainees.length
      item: {},
    };
  }

  onSubmit = async (values) => {
    const { name, email } = values;
    trainees.push({
      id: trainees.length,
      name,
      email,
      createdAt: Date().toLocaleString(),
    });
    this.setState({ open: false });
  }

  onClose = (field) => {
    this.setState((prevState) => ({
      [field]: !prevState[field],
    }));
  }

  handleSort = (orderBy, order) => {
    this.setState({
      orderBy,
      order,
    });
  }

  handleSelect = (id) => {
    const { match: { path }, history } = this.props;
    return (
      history.push(`${path}/${id}`)
    );
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  handleEditDialogOpen = (item) => {
    this.setState({
      edit: true,
      item,
    });
  }

  handleEditDialogSubmit = (values) => {
    const { name, email } = values;
    const { item } = this.state;
    const index = trainees.findIndex((trainee) => trainee.id === item.id);
    trainees[index].name = name;
    trainees[index].email = email;
    this.setState({ edit: false });
  }

  handleDeleteDialogOpen = (item) => {
    this.setState({
      del: true,
      item,
    });
  }

  handleDeleteDialogSubmit = () => {
    const { item } = this.state;
    const index = trainees.findIndex((trainee) => trainee.id === item.id);
    trainees.splice(index, 1);
    this.setState({ del: false });
  }

  render() {
    const {
      orderBy, order, page, rowsPerPage, count, open, edit, del, item,
    } = this.state;
    return (
      <div>
        <Button onClick={() => this.onClose('add')} variant="outlined" size="large" color="primary">
          ADD TRAINEE
        </Button>
        <AddDialog
          open={open}
          onClose={() => this.onClose('add')}
          onSubmit={this.onSubmit}
        />
        <EditDialog
          open={edit}
          onClose={() => this.onClose('edit')}
          item={item}
          onSubmit={this.handleEditDialogSubmit}
        />
        <DeleteDialog
          open={del}
          onClose={() => this.onClose('del')}
          onSubmit={this.handleDeleteDialogSubmit}
        />
        <GenericTable
          id="1"
          data={trainees}
          columns={[
            {
              field: 'name',
              label: 'Name',
              align: 'center',
            },
            {
              field: 'email',
              label: 'Email Address',
              format: (value) => value.toUpperCase(),
            },
            {
              field: 'createdAt',
              label: 'Date',
              align: 'right',
              format: this.getFormatData,
            },
          ]}
          actions={[
            {
              icon: <EditIcon />,
              handler: this.handleEditDialogOpen,
            },
            {
              icon: <DeleteIcon />,
              handler: this.handleDeleteDialogOpen,
            },
          ]}
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
          count={count}
          page={page}
          onChangePage={this.handleChangePage}
          rowsPerPage={rowsPerPage}
        />
        <ul>
          {trainees.map((trainee) => (
            <li key={trainee.id}>
              <Link to={`/trainee/${trainee.id}`}>{trainee.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

TraineeList.propTypes = {
  history: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
};
