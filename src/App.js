import React from "react";
import {  Link} from "react-router-dom";




export const App = () => {
  return (
    <div className="App">
       
          <nav className="navbar navbar">
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/userList">About</Link>
              </li>
            </ul>
          </nav>
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
