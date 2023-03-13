import React from "react";

class EvenSeconds extends React.Component {

    shouldComponentUpdate(nextProps) {
        console.log(nextProps.clock.toLocaleString());
        return nextProps.clock.getSeconds() %2 ? false : true;
    }

    render() {
        return <h1>{this.props.clock.toLocaleString()}</h1>
    }

}

export default EvenSeconds;