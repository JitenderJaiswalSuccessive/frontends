import React, { PureComponent } from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { MathField } from '../../components';
import theme from '../../theme';

class ChildrenDemo extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Typography>
          <h2> Math Operations</h2>
          <div>
            <MathField first={22} second={7} operator="+">
              {(first, second, result, operator) => (
                <div>
                  {' '}
                  {` ${first} ${operator} ${second} = ${result}` }
                </div>
              )}
            </MathField>
          </div>
          <div>
            <MathField first={9} second={22} operator="p">
              {(first, second, result, operator) => (
                <div>
                  {' '}
                  {` ${first} ${operator} ${second} = ${result}` }
                </div>
              )}
            </MathField>
          </div>
          <div>
            <MathField first={22} second={7} operator="*">
              {(first, second, result) => (
                <div>
                  {' '}
                  {` here ${first} and ${second} will give ${result}` }
                </div>
              )}
            </MathField>
          </div>
          <div>
            <MathField first={9} second={0} operator="/">
              {(first, second, result) => (
                <div>
                  {' '}
                  {` here ${first} and ${second} will give ${result}` }
                </div>
              )}
            </MathField>
          </div>
          <div>
            <MathField first={9} second={0} operator="/">
              {(first, second, result) => (
                <div>
                  {' '}
                  {` here ${first} and ${second} will give ${result}` }
                </div>
              )}
            </MathField>
          </div>
        </Typography>
      </ThemeProvider>
    );
  }
}
export default ChildrenDemo;
