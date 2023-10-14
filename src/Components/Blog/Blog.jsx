import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto mb-5">
        <h1 className="font-exo font-bold text-black text-3xl mb-4 pl-2">FAQ Question:</h1>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-2xl text-black font-bold font-exo">
          What is the difference between Props and State?
        </div>
        <div className="collapse-content">
          <div>
          <h4 className="font-exo font-bold text-xl text-black mb-2 underline">Props</h4>
          <ul className="font-exo font-semibold text-lg text-black">
          <li>React Components Use Props to Communicate with each Other</li>
          <li>Every Parent Component Can Pass Some information to its child Components by giving them props</li>
          <li>Pass any javascript value through Props including objects , arrays and functions.</li>
          </ul>
          <p className="font-exo font-bold text-lg text-black my-2">Rules of props:</p>
          <ul className="font-exo font-semibold text-lg text-black">
            <li>Pass props to the child component</li>
            <li>Read props inside the child component</li>
          </ul>
          </div>
          <div>
            <h4 className="font-exo font-bold text-lg text-black my-2 underline">State</h4>
            <p className="font-exo font-semibold text-lg text-black my-2">State represents the internal state of a component. It's an object that stores data that can be changed within the component. State should only be used for data that is specific to a component and can't be computed from props. When the state of a component changes, React will re-render the component and its children.</p>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl text-black font-bold font-exo">
          How does usestate work?
        </div>
        <div className="collapse-content">
          <p className="font-exo font-semibold text-lg text-black mb-2">useState is a React Hook that lets you add a state variable to your component. useState returns an array with exactly tow values:</p>
          <ul className="font-exo font-semibold text-lg text-black">
            <li>The Current state during the first render , it will match the initialstate you have passed.</li>
            <li>The set function that lets you update the state to a different value and trigger a re-render.</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl text-black font-bold font-exo">
          Purpose of use Effect other than fetching data?
        </div>
        <div className="collapse-content">
          <p className="font-exo font-semibold text-lg text-black mb-2">
            The useEffect Hook allows you to perform side effects in your components one example of side effects are fetching data. <br />
            <blockquote className="font-bold">useEffect(callback, dependencies)</blockquote>
          </p>
          <p className="font-exo font-semibold text-lg text-black"><big className="font-bold">Callback function:</big> This function can perform any side effects, such as fetching data from an API.</p>
          <p className="font-exo font-semibold text-lg text-black"><big className="font-bold">Dependencies:</big> Dependencies is an optional array of values that the callback function relies on.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl text-black font-bold font-exo">
          How Does React Work?
        </div>
        <div className="collapse-content">
          <p className="font-exo font-semibold text-lg text-black leading-9">React is a JavaScript library used in web application development. It helps in creating a web interface and is fully customizable to be used for various tasks including state management for user interface elements.
          React is a strategy or design paradigm that is "component-based". It divides the application or web page into smaller components, each of which can do one thing by performing a specific check on each component. These components are arranged together and help create a complete web application.
          </p>
          <p className="font-exo font-semibold text-lg text-black underline mb-2">The following component model is used in React application development:-</p>
          <ul className="font-exo font-medium text-lg text-black">
            <li>Unidirectional data flow</li>
            <li>Render virtual dom , diff algorithm </li>
            <li>React component lifecycle</li>
            <li>Components</li>
            <li>Props</li>
            <li>State ect</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
