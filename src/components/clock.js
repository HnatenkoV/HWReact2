import React from 'react';
import EvenSeconds from './evenclock.js'

class NewClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return(
            <>
                <h1>{this.state.date.toLocaleString()}</h1>
                <img src={this.props.clockImg} alt={this.props.clockImgName}/>
                <EvenSeconds clock = {this.state.date}
                />
            </>

        )
    }
}



export default NewClock;