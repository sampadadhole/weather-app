import React from "react"

function Location(data){

    return(
        <div className="location">
            {data.location && <h1>{data.location}, {data.country}</h1>}
            {/* <h1>{data.city},{data.country}</h1> */}
        </div>
    )

}

export default Location

