import React from "react";
import Club from "./Club";

const ClubsList = ({clubs, changeCurrentClub}) => {
    const allClubs = clubs.map(club => {
        return(
            <div className="col-md-6" key={club.id}>
            <Club club={club} changeCurrentClub = {changeCurrentClub}/>
            </div>
        )
    })
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-10 offset-1">
                    <div className="row">
                        {allClubs}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubsList;