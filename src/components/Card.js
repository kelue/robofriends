import React from 'react';

const Card = ({ name, email, id}) => { //inside the bracket we are destructing props so that is the equivalent of saying `const {name, email, id} = props which is equivalent to props.name, props.id, etc`
    return(
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?300x300`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;