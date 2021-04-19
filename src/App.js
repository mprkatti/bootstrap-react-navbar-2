import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Greeter from './components/GreeterForm';

function App() {
  /** 
    const showContent = () => (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '500px', margin: '10px'}}>
      <h2>Outstanding tasks for the day !!</h2>
      <div className="item">
        <p>
  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
        
        </p>
        <p>
  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
        </p>
      </div>
     <div className="item">
        <p>
  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
    
        </p>
  
        <p>
  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
        </p>
      </div>
  
      <div className="item">
        <p>
  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
    
        </p>
  
        <p>
  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
        </p>
      </div>
  
      <div className="item">
  
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
        </p>
  
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
        </p>
      </div>
      <div className="item">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
        </p>
  
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores similique consectetur dolores tenetur et quaerat, eligendi beatae quos dolore delectus fuga voluptates perferendis blanditiis soluta amet vitae? Eveniet, explicabo ducimus aliquid enim aperiam doloribus debitis odit accusamus veritatis impedit. Similique ea id vel tempore autem adipisci. Nesciunt, officiis ab?
        </p>
      </div>
      <button className="btn btn-primary btn-block">More Info &#8594;</button>
    </div>
    )
  */

  const showForm = () => {

    return (
      <Greeter />
    )
  }

  return (
    <div className="App">
      <Layout >
        <div className="backdrop">
          {showForm()}
        </div>
      </Layout>
    </div>
  );
}

export default App;
