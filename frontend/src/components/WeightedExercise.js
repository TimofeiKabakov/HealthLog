import React, { Component } from 'react'
import {FormControl, Grid, TextField, Box, FormHelperText, Checkbox, Button} from "@material-ui/core";

export default class WeightedExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 10,
            reps: 10,
            sets: 3,

        };
        this.handleRepsChanged = this.handleRepsChanged.bind(this);
        this.handleWeightChanged = this.handleWeightChanged.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleRepsChanged(e){
        this.setState({
            reps: e.target.value
        })
    };

    handleWeightChanged(e){
        this.setState({
            weight: e.target.value
        })
    };

    handleClicked(e){
        console.log(this.state.weight,this.state.reps,this.state.sets);
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
                <FormControl>
                    <TextField
                        required={true}
                        type="number"
                        onChange={this.handleWeightChanged}
                        defaultValue={10}
                        inputProps={{
                            min: 1,
                            style: { textAlign: "center" }
                        }} />
                    <FormHelperText>
                        <p align="center">
                            Weight(lbs)
                        </p>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Button onClick={this.handleClicked}>add</Button>
        </Grid>
        );
    }
}