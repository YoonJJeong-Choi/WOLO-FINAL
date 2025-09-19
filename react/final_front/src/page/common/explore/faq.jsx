import React from 'react';
import DataTable from '../../../components/table/Table.jsx';
import { styled } from '@mui/material';

const Table = TableDiv`

`;

const FAQ = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2>FAQ</h2>
      <Table>
        <DataTable />
      </Table>
    </div>
  );
};

export default FAQ;
