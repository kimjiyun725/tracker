import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Products = ({ products }) => {

    return (
        <TableContainer component={Paper}>
            <form>
                <Table aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Manufacturer</TableCell>
                            <TableCell>Style</TableCell>
                            <TableCell>Price Purchase</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Commission %</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.manufacturer}</TableCell>
                                <TableCell>{product.style}</TableCell>
                                <TableCell>{product.purchase_price}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>{product.commission_pct}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </form>
        </TableContainer>
    );
};