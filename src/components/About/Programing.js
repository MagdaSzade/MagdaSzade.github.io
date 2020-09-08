import React from 'react';

import SkilsReckord from './SkilsRecord';

const Programing = (props) => {
    function renderSkills() {
        return props.items.map(( item ) => {
            return <SkilsReckord key={item.name} skill = {item} />
        })

    }
    return (
        <div className="table-conteiner">
            <table>
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Stars</th>
                        <th>Github</th>
                    </tr>
                </thead>
                <tbody>
                    {renderSkills()}
                </tbody>
            </table>  
        </div>
    )
}

export default Programing;