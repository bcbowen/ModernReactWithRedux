import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    /*
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };        
    }
    */

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude }), 
            (err) => this.setState({errorMessage: err.message})
        );
    }

    /*
    componentDidUpdate() {
        console.log('updated, man');
    }
    */

    render() {
        //console.log('rendering, man');
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } 
        
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        } 
        
        //return <Spinner />
        return <Spinner message="Let us check your location, man!" />
        
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);