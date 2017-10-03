import React from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {Table, TableRow, TableCell, TableHead, TableBody, Card} from 'substance-ui';
import Container from '../components/container';


export default function(props) {
  return (
    <Grid fluid>
      <h1>Tables</h1>

      <Row>
        <Col xs={12} sm={6}>
          <Card>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
              <TableCell>Mitesh</TableCell>
              <TableCell>Shah</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mitesh</TableCell>
              <TableCell>Shah</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mitesh</TableCell>
              <TableCell>Shah</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mitesh</TableCell>
              <TableCell>Shah</TableCell>
            </TableRow>
            </TableBody>
          </Table>
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
          <Table striped hover>
            <TableHead color="secondary">
              <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
              <TableCell>Mitesh</TableCell>
              <TableCell>Shah</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mitesh</TableCell>
              <TableCell>Shah</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mitesh</TableCell>
              <TableCell>Shah</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mitesh</TableCell>
              <TableCell>Shah</TableCell>
            </TableRow>
            </TableBody>
          </Table>
          </Card>
        </Col>
      </Row>
    </Grid>
  )
}
