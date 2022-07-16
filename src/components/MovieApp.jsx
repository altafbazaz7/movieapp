import React from 'react'
import axios from 'axios'
import {TextField , Box , Button , Stack, Card, CardMedia, CardContent, Typography, Grid} from "@mui/material"
import { useState } from 'react'


const MovieApp = () => {
    const[search , setSearch] = useState("")
    const[details , setDetails] = useState([])

    const handleButton = () => {
        axios.get(`https://www.omdbapi.com/?apikey=37909a37&s=${search}`)
        .then((response) => {
            // console.log(response.data.Search);
            setDetails(response.data.Search)
            console.log(details);
            
        })
    }
  return (
    <>
    {/* nav */}
    
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{fontSize : '32px'}} align-center>Movie App</a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
          
          
    
    </div>
  </div>
</nav>
   

     <Box  sx={{marginLeft : {lg: "700px" , xs : '0px'}, marginRight : {lg: "700px" , xs : '0px'}, marginTop :{lg: "100px" , xs : '50px'}}}   >
     <Stack>
     <TextField placeholder='Enter Movie Name' id="outlined"  variant="outlined" sx={{width: {lg: '500px' , xs : '375px'}  } } value={search} onChange={(e)=>setSearch(e.target.value)} />
     <Button  onClick={handleButton}  sx={{marginLeft : {lg: "180px" , xs : '30%'}, marginTop : {lg: "10px" , xs : '2%'}}} color='error'  variant="contained" style={{width : '150px'} } >Search</Button>
     </Stack>
     </Box>  
     {/* dispplay data */}
   
     <div className="box">
    {
        
        details.map((curElem,index)=>{
            return(<>
              
      <Card id='card' key={index} sx={{ maxWidth: {lg : "345", xs : "120"}, marginRight: { lg: "0px" , xs: "30px"  } }}>
      <CardMedia
        component="img"
        height="140"
        image={curElem.Poster}
        alt="movie"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {curElem.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {curElem.Year}
        </Typography>
      </CardContent>
    
    </Card>
    
                </>
            )
        })
    } 
    </div>
        
     

    </>
    
  )
}

export default MovieApp
