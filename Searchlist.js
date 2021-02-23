import React, { Component } from 'react';
class Searchlist extends Component{
constructor()
{
    super();
    this.state ={

        list:null,
    }
}
componentDidMount(){

fetch("http://localhost:3000/Searchbox").then((response) => {

response.json().then((result) => {
    
    this.setState({list:result})
})
})
}
render(){
    
return(
    <div>
        <h1> Search List</h1>

        {
            this.state.list?
            <div>
                {
                this.state.list.map((item,i) =>
                   <div className="list-wrapper">
                    <span>{item.name}</span>
                    <span>{item.code}</span>
                    <span>{item.id}</span>
                    <span>{item.city}</span>
                    <span>{item.space_availbility}</span>
                    <span>{item.type}</span>
                   <span>{item.cluster}</span>
                   <span>{item.is_registered}</span>
                   <span>{item.is_live}</span>
                    

                       </div>)
                }
                </div>
            
                :<p>Please Wait...</p>
        }
    </div>
);

}



}
export default Searchlist