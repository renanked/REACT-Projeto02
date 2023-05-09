import React, { useState } from "react";

const App = () => {


let time = new Date().toLocaleTimeString();
const [ctime, setCtime] = useState(time);
const UpdateTime = () => {
  time = new Date().toLocaleTimeString();
  setCtime(time);
}

setInterval(UpdateTime, 1000);
 return(
<>
<p> Horário de Brasília </p>
<h1>  {ctime}  </h1>
<p>sexta-feira, 5 de maio de 2023</p>

</>

 );



}

export default App