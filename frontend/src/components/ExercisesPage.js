import React, { useEffect, useState } from 'react'
import { Select, FormControl, InputLabel, OutlinedInput,Grid, Button, MenuItem, Typography, TextField, InputAdornment, Box } from "@material-ui/core";

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


function ExercisePage (){
    const [Exercises, setExercises] = useState([])
    const [muscle, setMuscle] = React.useState("abductors");


	const handleChange = (event) => {
        console.log(event.target.value + "handle change")
		setMuscle(event.target.value);
        getExercises()
	}

    useEffect(()=>{
        getExercises()
    },[])

    const getExercises = async() =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f935d07355msh719b37bf5aee7adp1e1673jsnefbdbe08c0af',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        const data =  await fetch('https://exercisedb.p.rapidapi.com/exercises/target/' + muscle, options)

        const res =  await data.json()

        setExercises(res)
        console.log(muscle+" get exercise")
        console.log(Exercises)
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
        <Box>
            {Exercises.map((elem)=>
                <div>
                    <h1>{elem.name}</h1>
                    <h1>{elem.equipment}</h1>
                    <div key={elem.id}>
                        <img className="ExerciseGif" src={elem.gifUrl}></img>
                    </div>
                </div>
            )}
        </Box>
	  </div>

	);
}

export default ExercisePage