import { FC } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { ReportsTableProps } from "./reports-table.types";


const ReportsTable:FC<ReportsTableProps> = ({items}) => {
  return (
    <Table sx={{ minWidth: '1100px', marginTop: '60px' }}>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Comment</TableCell>
          <TableCell>To</TableCell>
          <TableCell>Driver</TableCell>
          <TableCell>Rate</TableCell>
          <TableCell>Coast</TableCell>
          <TableCell>Report</TableCell>
        </TableRow>
      </TableHead>
      {/* <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{formatDate(item.createdAt)}</TableCell>
            <TableCell>{item.source}</TableCell>
            <TableCell>{item.destination}</TableCell>
            <TableCell>
              ?
            </TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>?</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
    </Table>
  );
};

export default ReportsTable;