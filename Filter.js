
import React from "react";
import ReactDOM from "react-dom";
import './styles.css'

const people = [
  "First Week 2ndMonth 2010",
  "Second Week 3ndMonth 2011",
  "Third Week 4ndMonth 2011",
  "Forth Week 5ndMonth 2013",
  "Fifth Week 6ndMonth 2022",
  "Sixth Week 8ndMonth 2011"
];




function Filter() {
 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App1">
      <input
        type="text"
        placeholder="Search jobs by skills"
        value={searchTerm}
        onChange={handleChange}
      />
     
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
  
  
    </div>
  );
}
export default Filter;