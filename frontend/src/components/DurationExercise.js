import React, { Component } from 'react'
import {FormControl, Grid, TextField, Box, FormHelperText, Checkbox, Button} from "@material-ui/core";

export default class DurationExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 3,
            duration: 1,

        };
        this.handleSpeedChanged= this.handleSpeedChanged.bind(this);
        this.handleDurationChanged = this.handleDurationChanged.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleSpeedChanged(e){
        this.setState({
            speed: e.target.value
        })
    };

    handleDurationChanged(e){
        this.setState({
            duration: e.target.value
        })
    };

    handleClicked(e){
        console.log(this.state.speed,this.state.duration);
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
                        onChange={this.handleSpeedChanged}
                        defaultValue={this.state.speed}
                        inputProps={{
                            min: 1,
                            max: 10,
                            style: { textAlign: "center" }
                        }} />
                    <FormHelperText>
                        <p align="center">
                            Speed/Resistance
                        </p>
                    </FormHelperText>
                </FormControl>

            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField
                        required={true}
                        type="number"
                        onChange={this.handleDurationChanged}
                        defaultValue={this.state.duration}
                        inputProps={{
                            min: 1,
                            style: { textAlign: "center" }
                        }} />
                    <FormHelperText>
                        <p align="center">
                            Time(mins)
                        </p>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Button onClick={this.handleClicked}>add</Button>
        </Grid>
        );
    }
}