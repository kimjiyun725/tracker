import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Managers = ({ managers }) => {

    return (
        <TableContainer component={Paper}>
            <form>
                <Table aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {managers.map((manager) => (
                            <TableRow
                                key={manager.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{manager.first_name} {manager.last_name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </form>
        </TableContainer>
    );
};