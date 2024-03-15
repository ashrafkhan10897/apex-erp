import { useState } from "react";
import { Card, CardContent, Typography, Button,TextField, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../components/Order.css";

export default function Order({orderId,custName,ordDate,status,savStatus,delOrder}){
    //state variable for editing status
    const [isEdit,setIsEdit] = useState(false);
    const [newStatus,setNewStatus] = useState(status);
    //function to edit status
    const changeStatus = (e)=>{
        setIsEdit(true);
        setNewStatus(e.target.value);
    }

    const deleteOrder = ()=>{
      delOrder(orderId);
    }
    //function to save status
    const saveStatus = () =>{
        //function in parent component to re-render on saving
        savStatus(orderId,newStatus);
        //change edit mode to view mode
        setIsEdit(false);
    }
    return(
        <Card variant="outlined" style={{ minWidth: 275, maxWidth: 300, marginBottom: 20 }} className='order'>
        <CardContent>
          {isEdit? <>
          <TextField label="Status" value={newStatus} onChange={(e) => changeStatus(e)} /> <br/>
          <Button onClick={saveStatus}>Save</Button>
            </>
          :<>
            <Typography variant="h5" component="div">
              Order id:{orderId}
            </Typography>
            <Typography color="text.secondary">
              Customer: {custName}
            </Typography>
            <Typography color="text.secondary">
              Order Date: {ordDate}
            </Typography>
            <Typography color="text.secondary">
              Order status: {newStatus}
            </Typography>
            <Button variant='contained' onClick={changeStatus}>Update Status</Button>
            <IconButton onClick={deleteOrder}>
                <DeleteIcon />
            </IconButton>
          </>
          }
          
      </CardContent>
    </Card>
    )
}