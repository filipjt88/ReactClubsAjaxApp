import React from "react";


const Club = ({ club, changeCurrentClub }) => {
    return (
        <div className="card mt-3 m-3">
            <div className="card-header">
                <h2 className="text-center">{club.Team}</h2>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <p>League: {club.League}</p>
                        <p>Conference: {club.Conference}</p>
                        {/* <p>Stadium: {club.Stadium}</p> */}
                    </div>
                    <div className="col-md-6">
                        <p>State: {club.State}</p>
                        <p>City: {club.City}</p>
                        <p>Country: {club.Country}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {changeCurrentClub(club)}}>Read more</button>
            </div>
        </div>
    )
}

export default Club;