import { useState } from "react";
import { Card, CardContent, Typography, Button, IconButton, TextField } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Product = ({ id, name, category, price, stockQuantity, onEdit, onDelete }) => {
  //state variable for entering edit mode
  const [isEditing, setIsEditing] = useState(false);
  //state variables for changing Edit values
  const [editedName, setEditedName] = useState(name);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedStockQuantity, setEditedStockQuantity] = useState(stockQuantity);

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      onEdit(id, editedName, editedCategory, editedPrice, editedStockQuantity);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <Card variant="outlined" style={{ minWidth: 275, maxWidth: 300, marginBottom: 20 }}>
      <CardContent>
        {isEditing ? (
          <>
            <TextField label="Name" value={editedName} onChange={(e) => handleInputChange(e, setEditedName)} /> <br/>
            <TextField label="Category" value={editedCategory} onChange={(e) => handleInputChange(e, setEditedCategory)} /> <br/>
            <TextField label="Price" type="number" value={editedPrice} onChange={(e) => handleInputChange(e, setEditedPrice)} /> <br/>
            <TextField label="Stock Quantity" type="number" value={editedStockQuantity} onChange={(e) => handleInputChange(e, setEditedStockQuantity)} /> <br/>
          </>
        ) : (
          <>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography color="text.secondary">
              Category: {category}
            </Typography>
            <Typography color="text.secondary">
              Price: ${parseFloat(price).toFixed(2)}
            </Typography>
            <Typography color="text.secondary">
              Stock Quantity: {stockQuantity}
            </Typography>
          </>
        )}
        <Button variant="contained" onClick={handleEdit} startIcon={<EditIcon />}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Product;
