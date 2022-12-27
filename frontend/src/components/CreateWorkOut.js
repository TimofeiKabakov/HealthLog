import React, { Component, useState } from "react";
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    Redirect
} from "react-router-dom"
import { Select, FormControl, InputLabel, OutlinedInput,Grid, Button, MenuItem } from "@material-ui/core";


const muscleGroups = [
	"abductors","abs","adductors","biceps","calves","cardiovascular system"
	,"delts","forearms","glutes","hamstrings","lats","pectorals","quads","serratus anterior"
	,"spine","traps","triceps","upper back"
    ];

var apiPath = 'https://exercisedb.p.rapidapi.com/exercises/target/'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
	  style: {
		maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
		width: 250,
	  },
	},
  };


export default function CreateWorkOut() {

	const [muscle, setMuscle] = React.useState('');
	const handleChange = (event) => {
		setMuscle(event.target.value);
	}

	const handleButtonPressed = () => {
		console.log(muscle)
	}


	return(
		<div>
		<FormControl sx={{ m: 1, width: 300 }}>
		  <InputLabel id="demo-multiple-name-label">Name</InputLabel>
		  <Select
			labelId="demo-multiple-name-label"
			id="demo-multiple-name"
			value={muscle}
			onChange={handleChange}
			input={<OutlinedInput label="Name" />}
			MenuProps={MenuProps}
		  >
			{muscleGroups.map((muscle) => (
			  <MenuItem
				key={muscle}
				value={muscle}
			  >
				{muscle}
			  </MenuItem>
			))}
		  </Select>
		</FormControl>
		<Grid item xs={12} align="center">
			<Button color="primary" variant="contained" onClick={handleButtonPressed}>Create a Room</Button>
		</Grid>
	  </div>

	);
}

