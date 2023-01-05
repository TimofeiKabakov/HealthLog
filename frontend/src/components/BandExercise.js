import React, { Component } from 'react'
import {FormControl, Grid, TextField, Box, FormHelperText, Checkbox, Button, InputLabel, Select, OutlinedInput, MenuItem} from "@material-ui/core";

const colors = ["Tan", "Yellow", "Red", "Green", "Blue", "Black", "Silver", "Gold"]
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


export default class BandExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "Tan",
            reps: 10,
            sets: 3,

        };
        this.handleRepsChanged = this.handleRepsChanged.bind(this);
        this.handleColorChanged = this.handleColorChanged.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleRepsChanged(e){
        this.setState({
            reps: e.target.value
        })
    };

    handleColorChanged(e){
        this.setState({
            color: e.target.value
        })
    };

    handleClicked(e){
        console.log(this.state.color,this.state.reps,this.state.sets);
        console.log(e.target.id);
    };

    render(){
        return(
            <Grid item className='exercise' xs={3} align="center">
                <h1>{this.props.name}</h1>
                <h1>{this.props.equipment}</h1>
                <div>
                    <img className="ExerciseGif" src={this.props.gifUrl}></img>
                </div>
            <Grid item xs={3} align="center">
                <FormControl>
                    <TextField
                        required={true}
                        type="number"
                        onChange={this.handleRepsChanged}
                        defaultValue={this.state.reps}
                        inputProps={{
                            min: 1,
                            style: { textAlign: "center" }
                        }} />
                    <FormHelperText>
                        <p align="center">
                            Reps
                        </p>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={this.state.color}
                        onChange={this.handleColorChanged}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                    >
                        {colors.map((color) => (
                            <MenuItem
                                key={color}
                                value={color}
                            >
                                {color}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Button onClick={this.handleClicked}>add</Button>
        </Grid>
        );
    }
}