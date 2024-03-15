import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardMedia';
import { Button } from "@mui/material";
import "../components/Feature.css";

export default function Feature({feature,property,btnText,link,img}){
    return(
      <div className="feature">
      <Link to={link}>
      <Card sx={{ display: "flex" ,width:350}}>
        <Box sx={{ display: "flex", flexDirection: "column",width:350 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {feature}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {property}
            </Typography>
            <CardActions>
          <Button variant="contained">{btnText}</Button>
        </CardActions>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, height: 151 }}
          image={img}
          alt="Orders"
        />
      </Card>
      </Link>
      </div>
    )
}