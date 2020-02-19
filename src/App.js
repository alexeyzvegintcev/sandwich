import React from 'react';
import Layout from './hoc/Layout/Layout'
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';

function App() {
  return (
    
      <div>
      <Layout>
        <SandwichBuilder/>
      </Layout>
      </div>
   
  );
}

export default App;
