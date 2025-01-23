import React from 'react'
import {} from './About.css'

const about = () => {
  return (
    <div>
      <div className="tab1">
        <h3>Personal Blog</h3>
        <p>A clean, responsive blog website.</p>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
        <a href="http://127.0.0.1:5501/index.html" target="_blank">View Live Demo</a>
      </div>
      
      <div className="tab2">
        <h3>E-commerce Store</h3>
        <p>An online store with cart functionality.</p>
        <p><strong>Technologies:</strong> React, Node.js</p>
        <a href="http://127.0.0.1:5501/index.html" target="_blank">View Live Demo</a>
      </div>
    </div>
  )
}

export default about

