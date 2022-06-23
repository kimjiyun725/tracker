import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const SalesPersons = ({ salesPersons }) => {

    return (
        <TableContainer component={Paper}>
            <form>
                <Table aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone #</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>Termination Date</TableCell>
                            <TableCell>Manager</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {salesPersons.map((salesPerson) => (
                            <TableRow
                                key={salesPerson.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{salesPerson.first_name} {salesPerson.last_name}</TableCell>
                                <TableCell>{salesPerson.address}</TableCell>
                                <TableCell>{salesPerson.phone}</TableCell>
                                <TableCell>{salesPerson.start_date}</TableCell>
                                <TableCell>{salesPerson.termination_date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </form>
        </TableContainer>
    );
};