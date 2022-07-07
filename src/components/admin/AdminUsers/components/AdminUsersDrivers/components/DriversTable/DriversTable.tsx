import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { AdminUsersTableProps } from '../../../../admin-users.types';

function DriversTable({ items }: AdminUsersTableProps) {
  return (
    <Table sx={{ minWidth: '1100px', marginTop: '60px' }}>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Car</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.firstName}</TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>action</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DriversTable;
