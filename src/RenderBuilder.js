import  React  from "react"
import {  Builder } from '@builder.io/react';



export  function RenderBuilder(props){
    
        console.log("Builder props========>", props.text)
        return <h1>{"Test"}</h1>;
    
}

Builder.registerComponent(RenderBuilder, {
    name: 'Simple Text',
    inputs: [{ name: 'text', type: 'string' }],
  })