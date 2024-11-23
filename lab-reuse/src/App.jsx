import {useState} from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";
import Layout, {
  headerStyle, sidebarStyle, mainStyle, footerStyle
} from "./components/Layout";

function App() {
  const [data, setData] = useState([
    {
      title: "React",
      image: "https://via.placeholder.com/200",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      title: "Vue",
      image: "https://via.placeholder.com/300",
      description: "The Progressive JavaScript Framework.",
    },
  ]);

  function removeData(index) {
    setData(data.filter((_,i)=>index!=i));
  }

  return (
    <>
    <Layout>
      <div style={mainStyle}>Main</div>
      <div style={headerStyle}>Header</div>
      <div style={footerStyle}>Footer</div>
      <div style={sidebarStyle}>Sidebar</div>
    </Layout>
    <Input action={(v)=>console.log(v)} />
    <Input type="number" action={(v)=>console.log(v)} 
    style={{backgroundColor:'gray'}} />
    <Container style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h1>Reusable Container</h1>
      <h3>Test Childern</h3>
      <p>This is a container that accepts children.</p>
      <Button text="Click Me" onClick={() => alert("Inside Container")} />
    </Container>
    <div>
      <Button text="Click Me" color="green" onClick={() => alert("Clicked!")} />
      <Button text="Delete" color="red" size="large" 
      onClick={() => alert("Deleted!")} />
    </div>
    <div>
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          image={item.image}
          remove={()=>removeData(index)}
          description={item.description}
        />
      ))}
    </div>
    </>
  );
}

export default App;