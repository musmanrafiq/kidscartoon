import React from "react";
import db from "../Firebase";
import { addDoc, collection } from "@firebase/firestore"

class Home extends React.Component
 {
  constructor(){
    super();
  }

  add = () => {

const ref = collection(db, "videos") // Firebase creates this automatically
let data = {
testData: '111'
}
try {
addDoc(ref, data)
} catch(err) {
console.log(err)
}
  };
  
  render(){

  this.add();

  return <h1>Home</h1>;
  }
}

export default Home;