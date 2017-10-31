import React from 'react';

import { Row, Column, Panel } from 'substance-ui/lib/components/Layouts';
import { Card } from 'substance-ui/lib/components/Card';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { Table, TableRow, TableCell, TableHead, TableBody } from 'substance-ui/lib/components/Tables';


export default function(props) {
  return (
    <div>
      <Panel paddingTop={100} paddingBottom={40}>
        <Heading type="h2" weight={800} margin={0}>Tables</Heading>
        <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
      </Panel>
      <Row gutter={40} columnsCount={2}>
        <Column matchHeight>
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
        </Column>
        <Column matchHeight>
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
        </Column>
      </Row>
    </div>
  )
}
