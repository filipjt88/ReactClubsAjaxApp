import React from "react";


const Modal = ({currentClub}) => {
    console.log(currentClub);
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="staticBackdropLabel">{currentClub.Team}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Conference: {currentClub.Conference}</p>
                        <p>Stadium: {currentClub.Stadium}</p>
                        <p>City: {currentClub.City}</p>
                        <p>State: {currentClub.State}</p>
                        <p>Country: {currentClub.Country}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;