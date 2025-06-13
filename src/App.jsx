// App.jsx
import React from "react";
import Card from "./components/Card";

const items = [
  { id: 1, title: "Python", description: "Data Science and Machine Learning", image: },
  { id: 2, title: "Javascript", description: "Frontend Web Development" },
  { id: 3, title: "C++", description: "High-performance Computing" },
  { id: 4, title: "Golang", description: "Cloud infrastructure tools" },
  { id: 5, title: "Rust", description: "Systems Programming" },
  { id: 6, title: "Swift", description: "iOS / macOS App Development" },
  { id: 7, title: "Kotlin", description: "Android app development" },
  { id: 8, title: "Scala", description: "Data Engineering" },
  { id: 9, title: "C", description: "Embedded Systems" },
  { id: 10, title: "Java", description: " Backend Development" },


];

function App() {
  return (

    
    <div className="grid">
      {items.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default App;
