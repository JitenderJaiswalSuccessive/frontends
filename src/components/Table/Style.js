const style = {
  root: {
    width: '100%',
    marginTop: '10px',
    overflowX: 'auto',
    marginRight: '20px',
    marginLeft: '20px',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(even)': {
      backgroundColor: 'gray',
    },
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'gray',
    },
  },
};

export default style;
