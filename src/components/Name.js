import React from 'react';

export const Name=(props)=>{
    const n=props.name;
    const h=props.heroName;
    return(
        <div>
            <h1>Hello {n} {h}</h1>
        </div>
    )
}
