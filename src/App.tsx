import './App.css';
import TreeView from './TreeView';


const tree = {
  root: "Full Stack Dev",
  data: [
    { name: "Frontend", data: [{ name: "Basics" , data: [{ name: "HTML" },{ name: "CSS"},{ name: "JS"}]}, { name: "Frameworks", data: [{ name: "React" },{ name: "Angular" },{ name: "Vue" }] }, { name: "Styles", data: [{ name: "Bootstrap" },{ name: "MaterialUI" }] }] },
    { name: "Backend", data: [{ name: "Technologies", data: [{ name: "php" }, { name: "Node" }, { name: 'Java'}] }] },
    { name: 'Database' , data : [ {name: 'Mysql'}, {name: 'MongoDB'}]},
    { name: 'Devops' , data : [ {name: 'AWS'}, {name: 'Docker'}, {name: 'Automation', data : [{name: 'Jenkins'}, {name: 'Big Bucket'}]}]},
  ]
}


function App() {
  return (
    <div className="App">
      <TreeView index={0} data={tree.data} name={tree.root} />
    </div>
  );
}

export default App;
