import React, { Component, useEffect, useState } from 'react'
import { Select, FormControl, InputLabel, OutlinedInput,Grid, Button, MenuItem, Box} from "@material-ui/core";
import WeightedExercise from './WeightedExercise';
import UnweightedExercise from './UnweightedExercise'
import BandExercise from './BandExercise';
import DurationExercise from './DurationExercise'

const muscleGroups = [
	"all","abductors","abs","adductors","biceps","calves","cardiovascular system"
	,"delts","forearms","glutes","hamstrings","lats","pectorals","quads","serratus anterior"
	,"spine","traps","triceps","upper back"
    ];
const exerciseTypes = ["all","band","body weight", "duration", "weights"]
const bodyWeight = ["assisted", "body weight","bosu ball", "roller", "rope",
                    "stability ball", "tire","wheel roller"]
const band = ["band", "resistance band"]
const duration = ["elliptical machine","skierg machine","stationary bike","stepmill machine"]


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


export default class ExercisePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            muscle: "abductors",
            equipment: "all",
            exercises: [],
        };
        this.handleMuscleChanged = this.handleMuscleChanged.bind(this);
        this.handleTypeChanged = this.handleTypeChanged.bind(this);
        this.getExercises = this.getExercises.bind(this);
        this.whichExercise = this.whichExercise.bind(this);

    }

    componentDidMount() {
        this.getExercises();
    }

    handleMuscleChanged(e){
        this.setState({
            muscle: e.target.value
        })
        this.getExercises();
    };

    handleTypeChanged(e){
        this.setState({
            equipment: e.target.value
        })
        this.getExercises();
    };

    getExercises = async () => {
        const response = await fetch("/api/exercise/"+this.state.muscle);
        const res = await response.json();
        this.setState({
            exercises: res,
        })
        console.log(this.state.muscle);
    }

    whichExercise(exercise){
        if(bodyWeight.includes(exercise.equipment)){
            return(<UnweightedExercise name={exercise.name} equipment={exercise.equipment} gifUrl={exercise.gifUrl} key={exercise.id} />);
        }else if(band.includes(exercise.equipment)){
            return(<BandExercise name={exercise.name} equipment={exercise.equipment} gifUrl={exercise.gifUrl} key={exercise.id} />);
        }else if(duration.includes(exercise.equipment)){
            return(<DurationExercise name={exercise.name} equipment={exercise.equipment} gifUrl={exercise.gifUrl} key={exercise.id} />);
        }else{
            return(<WeightedExercise name={exercise.name} equipment={exercise.equipment} gifUrl={exercise.gifUrl} key={exercise.id} />);
        }
    }
    

    render(){
        return(
            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={this.state.muscle}
                        onChange={this.handleMuscleChanged}
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
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">type</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={this.state.type}
                        onChange={this.handleTypeChanged}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                    >
                        {exerciseTypes.map((exercise) => (
                            <MenuItem
                                key={exercise}
                                value={exercise}
                            >
                                {exercise}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary">Save</Button>

                <Box>
                <Grid container spacing={3} columns={{ xs: 3, sm: 6, md: 9 }}>
                    {this.state.exercises.map((elem) =>
                        this.whichExercise(elem)
                    )}
                </Grid>
            </Box>
        </div>
        );
    }
}
