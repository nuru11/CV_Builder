import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Header from "../screens/header"

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'surname', label: 'Surname', minWidth: 100 },
  { id: 'nationality', label: 'Nationality', minWidth: 170 },
  { id: 'position', label: 'Position', minWidth: 170 },
  { id: 'country', label: 'Country', minWidth: 170 },
  { id: 'createdAt', label: 'Created At', minWidth: 170 },
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

export default function StickyHeadTable() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [editData, setEditData] = React.useState({});
  
  // Menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/tget-images');
        const result = await response.json();
        if (result.status === 'ok') {
          const sortedData = result.data
            .filter(item => item.createdAt)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setRows(sortedData);
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:4000/tget-images/${id}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.status === 'ok') {
          setRows(rows.filter(row => row._id !== id));
        } else {
          console.error('Error deleting data:', result.message);
        }
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  const handleEdit = (row) => {
    setEditData(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/tget-images/${editData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });
      const result = await response.json();
      if (result.status === 'ok') {
        setRows(rows.map(row => (row._id === editData._id ? result.data : row)));
        handleClose();
      } else {
        console.error('Error updating data:', result.message);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleRowClick = (id) => {
    navigate(`/list/${id}`);
  };

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOptionClick = (option, event) => {
    event.stopPropagation(); // Prevents navigation when the menu option is clicked
    handleMenuClose();
    if (option === 'copy-link') {
      // Construct the detail page URL
      const link = `${window.location.origin}/list/${selectedRow._id}`;
      
      // Copy the link to the clipboard
      navigator.clipboard.writeText(link)
        .then(() => {
          console.log('Link copied to clipboard:', link);
          alert('Link copied to clipboard!'); // Optional: give feedback to the user
        })
        .catch(err => {
          console.error('Failed to copy link:', err);
        });
    } else if (option === 'detail') {
      navigate(`/list/${selectedRow._id}`);
    } else if (option === 'send') {
      // Implement send functionality here
      console.log('Send option for:', selectedRow);
    }
  };
  

  return (
    <>
    
            
            
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <Header /> 
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {rows
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => (
      <TableRow hover role="checkbox" tabIndex={-1} key={row._id} onClick={() => handleRowClick(row._id)}>
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align}>
              {column.id === 'actions' ? (
                <>
                  <IconButton onClick={(event) => { event.stopPropagation(); handleEdit(row); }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={(event) => { event.stopPropagation(); handleDelete(row._id); }}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={(event) => { event.stopPropagation(); handleMenuClick(event, row); }}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleMenuClose}
>
  <MenuItem onClick={(event) => handleMenuOptionClick('copy-link', event)}>Copy Link</MenuItem>
  <MenuItem onClick={(event) => handleMenuOptionClick('detail', event)}>Detail</MenuItem>
  <MenuItem onClick={(event) => handleMenuOptionClick('send', event)}>Send</MenuItem>
</Menu>
                </>
              ) : (
                value
              )}
            </TableCell>
          );
        })}
      </TableRow>
    ))}
</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* Edit Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Entry</DialogTitle>
        <DialogContent sx={{ maxHeight: '400px', overflowY: 'auto' }}>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            fullWidth
            variant="outlined"
            value={editData.name || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="placeofbirth"
            label="Place of Birth"
            fullWidth
            variant="outlined"
            value={editData.placeofbirth || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="surname"
            label="Surname"
            fullWidth
            variant="outlined"
            value={editData.surname || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="nationality"
            label="Nationality"
            fullWidth
            variant="outlined"
            value={editData.nationality || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="position"
            label="Position"
            fullWidth
            variant="outlined"
            value={editData.position || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="country"
            label="Country"
            fullWidth 
            variant="outlined"
            value={editData.country || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="createdAt"
            label="Created At"
            fullWidth
            variant="outlined"
            value={editData.createdAt || ''}
            onChange={handleInputChange}
            InputProps={{
              readOnly: true, // Assuming createdAt should not be editable
            }}
          />
          {/* Add more fields as necessary */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
    </>
  );
}