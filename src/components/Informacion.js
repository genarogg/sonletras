import React from 'react'

function Informacion({info}){
    return(
        <div className="card border-light">
            <div className="card-header-bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Logo del Artista"/>
                <p className="card-text">Genero: {info.strGenre}</p>
                <h2 className="card-text text-center">Biografia</h2>
                <p className="card-text">{info.strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="nooperner noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="nooperner noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="nooperner noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Informacion;