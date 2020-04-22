import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ReactPictureAnnotation } from "react-picture-annotation";

import "./styles.css";

export const App = () => {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = selectedId => console.log(selectedId);
  const onChange = data => console.log(data);

  return (
    <div className="App">
      <ReactPictureAnnotation
        image="https://source.unsplash.com/random/800x600"
        onSelect={onSelect}
        onChange={onChange}
        width={pageSize.width}
        height={pageSize.height}
      />
    </div>
  );
};























// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
// import { BuilderComponent, builder } from '@builder.io/react';

// import './index.css';

// builder.init("aae385ca9d674c028b3b43fd2ff7922c")

// export default function App() {
//   return (
//     <BrowserRouter>
//       <header>
//         <div className="logo">MY SITE</div>
//         <div className="links">
//           <Link className="link" to="/">Home</Link>
//           <Link className="link" to="/about">About</Link>
//           <Link className="link" to="/page-1">Page 1</Link>
//           <Link className="link" to="/page-2">Page 2</Link>
//           <Link className="link" to="/404">404</Link>
//         </div>
//       </header>
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" exact component={About} />
//           <Route render={({ location }) => <CatchallPage key={location.key} />} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// class CatchallPage extends React.Component {
//   state = { notFound: false };

//   render() {
//     return !this.state.notFound ? (
//       <BuilderComponent
//         model="first-home-page"
//         contentLoaded={content => {
//           if (!content) {
//             this.setState({ notFound: true });
//           }
//         }}
//       >
//         <div className="loading">Loading...</div>
//       </BuilderComponent>
//     ) : (
//       <NotFound /> // Your 404 content
//     );
//   }
// }

// const Home = () => <h1>I am the homepage!</h1>;
// const About = () => <h1>I am the about page!</h1>;
// const NotFound = () => <h1>No page found for this URL, did you publish it?</h1>;

// // const rootElement = document.getElementById('root');
// // ReactDOM.render(<App />, rootElement);
