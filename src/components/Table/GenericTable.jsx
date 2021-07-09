import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import style from './Style';

class GenericTable extends PureComponent {
  render() {
    const {
      id, columns, data, orderBy, order, onSort, onSelect,
      page, count, onChangePage, actions, rowsPerPage,
    } = this.props;
    const neworder = order === 'asc' ? 'dsc' : 'asc';
    console.log(onChangePage, onSelect);
    return (
      <Paper style={style.root}>
        <Table style={style.table}>
          <TableHead>
            <TableRow style={style.row} key={id}>
              {columns.map((col) => {
                const { field, align, label } = col;
                return (
                  <TableCell key={field} align={align}>
                    <TableSortLabel
                      active={orderBy === field}
                      direction={order}
                      onClick={() => onSort(field, neworder)}
                    >
                      {label}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              // onClick={() => onSelect(item.id)}
              <TableRow style={style.row} key={item.id}>
                {columns.map((col) => {
                  const { format, field, align } = col;
                  return (
                    <TableCell key={field} align={align}>
                      {format ? format(item[field]) : item[field]}
                    </TableCell>
                  );
                })}
                <TableCell>
                  {actions.map((action) => {
                    const { icon, handler } = action;
                    return (
                      <IconButton onClick={() => handler(item)}>
                        {icon}
                      </IconButton>
                    );
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              { count > 0 && (
                <TablePagination
                  count={count}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onChangePage={onChangePage}
                />
              )}
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}
GenericTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onSort: PropTypes.func,
  onSelect: PropTypes.func,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
GenericTable.defaultProps = {
  orderBy: '',
  order: 'asc',
  onSort: () => {},
  onSelect: () => {},
  onChangePage: () => {},
};

export default GenericTable;
