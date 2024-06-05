import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  time: string,
  name: string,
  number: string,
  status: string,
  interest: string,
) {
  return { id, time, name, number, status, interest };
}

const rows = [
  createData(
    0,
    new Date().toLocaleTimeString(),
    'Anant Chandra',
    '9450761085',
    'Pending WhatsApp response',
    'E-gold',
  ),
  createData(
    1,
    new Date(Date.now() - 3600000).toLocaleTimeString(),
    'Chiranjiv Paritosh',
    '9912318432',
    'Payment link shared',
    'Diamond solitaires',
  ),
  createData(
    2,
    new Date(Date.now() - 7200000).toLocaleTimeString(),
    'Vibhore Jayaswal',
    '9973418387',
    'Lead sent to Hubspot',
    'Silver pendants',
  ),
  createData(
    3,
    new Date(Date.now() - 10800000).toLocaleTimeString(),
    'Kunal Bahl',
    '8973434381',
    'Lead sent to Zoho',
    'Ruby rings',
  ),
  createData(
    4,
    new Date(Date.now() - 14400000).toLocaleTimeString(),
    'Rajul Garg',
    '9490418399',
    'No follow-up (low chance of conversion)',
    'Sapphire earrings',
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
        <Title>Recent inquiries</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Conversion status</TableCell>
                <TableCell align="right">Categories of interest</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell align="right">{row.interest}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
            See more inquiries
        </Link>
        </React.Fragment>
    );
}
