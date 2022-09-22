import React from 'react'

function List() {
    const persons=[{
        id:1,
        name:'Sameer',
        age:22,
    },
    {
        id:2,
        name:'Kishan',
        age:16
    },
    {
        id:3,
        name:'Varma',
        age:43
    }
]
  return (
    <div>
        <hr/>
        {persons.map((p,index)=>
            <div key={index}>
                <h2>{index} {p.name}</h2>
                <h2>{index} {p.age}</h2>
            </div>)}
    </div>
  )
}

export default List;