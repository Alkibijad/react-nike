import React from 'react'
import SectionOneImage from "../images/img-1.webp"


function HomePage() {
  return (
    <div className='homePage'>
      <section className="section-1">
        <div className="section-1--image">
          <img src={SectionOneImage} alt="" />
          <h1>in peg we trust</h1>
          <p>introducing the new nike air pegasus 39</p>
          <button className='btn-black'><a className='btn-black' href="https://www.nike.com/w/pegasus-8nexh" target="_blank" rel="noopener noreferrer">Shop</a></button>
        </div>
      </section>
      <section className="section-2">
        <h2>more from nike</h2>
        <div className="images-container">
          <div className="images-container-left imagePosition">

            <div className="section-2--content">
              <h3>running apparel</h3>
              <button><a className="btn-white" href="" target="_blank" rel="noopener noreferrer">shop</a></button>
            </div>
          
        </div>
          <div className="images-container-top imagePosition">
          <div className="section-2--content">
              <h3>air force 1</h3>
              <button className="btn-white"><a href="" target="_blank" rel="noopener noreferrer">shop</a></button>

            </div>
         

            
        </div>
          <div className="images-container-bottom imagePosition">
             <div className="section-2--content">
              <h3>bassketball essentials</h3>
              <button ><a className="btn-white" href="" target="_blank" rel="noopener noreferrer">shop</a></button>

            </div>
        
            
        </div>
        </div>
      </section>
      <section className="section-3"></section>

    </div>
  )
}

export default HomePage