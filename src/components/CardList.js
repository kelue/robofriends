import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    return(
        <div>
           {  //this curly braces allows us to insert javascript in between html tags, kinda like php and html. So basically we can evaluate expression and lamda function and the results is returned right into the html tag as is seen here
               robots.map((user, i)=>{
                return (
                    <Card 
                    key={robots[i].id} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                    />)
                })
            }    
        </div>
    )
}

export default CardList;