import React from 'react';

const Info = (props) => {
    return (
        <div>
            {props.infoType === 200 ? <p>Twoja wiadomosć została wysłana</p> : <p>Mam jakiś problem z backendem - proszę skontaktuj się ze mną przez GitHuba lub LinkedIn</p>}
        </div>
    )
}

export default Info;