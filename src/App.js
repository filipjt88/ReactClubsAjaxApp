import React from "react";
import Navbar from "./components/Navbar";
import ClubsList from "./components/ClubsList";
import Modal from "./components/Modal";

class App extends React.Component {
    state = {
        clubs: [],
        currentClub: {}
    }

    changeCurrentClub = (club) => {
        this.setState({currentClub:club})
    }

    componentDidMount() {
        fetch("https://mysafeinfo.com/api/data?list=nbateams&format=json&case=default").then(res => {
            return res.json();
        }).then(data => {
            this.setState({clubs:data})
        })
    }
    render() {
        return(
            <>
            <Navbar />
            <ClubsList clubs={this.state.clubs} changeCurrentClub={this.changeCurrentClub}/>
            <Modal currentClub={this.state.currentClub}/>
            </>
        )
    }
}

export default App;