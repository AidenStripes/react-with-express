import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import './App.css';


export const numberWithCommas = (number) => {
  return new Intl.NumberFormat('en-US').format(number)
}

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      response: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/stats')
      .then(res => res.json(numberWithCommas))
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            response: result.response
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, response } = this.state;
    if (error) {
      return <div>Błąd: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Ładowanie...</div>;
    } else {
      return (
        <div className="MyComponent">
          {response.map((response) => (
            <Table key={response} variant='striped' colorScheme='teal'>
              <TableCaption>Covid Cases in Poland</TableCaption>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>cases</Th>
                  <Th isNumeric>deaths</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>total</Td>
                  <Td>{numberWithCommas(response.cases.total)}</Td>
                  <Td isNumeric>{numberWithCommas(response.deaths.total)}</Td>
                </Tr>
                <Tr>
                  <Td>new</Td>
                  <Td>{numberWithCommas(response.cases.new)}</Td>
                  <Td isNumeric>{numberWithCommas(response.deaths.new)}</Td>
                </Tr>
              </Tbody>
              <Tfoot>
              </Tfoot>
            </Table>
          ))}
        </div>
      );
    }
  }
}

MyComponent.prototypes = {
  countries: PropTypes.array,
}
