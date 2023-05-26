import React from 'react'
import "./styles/contact.css"

const Contact = () => {
  return (
    
  <div className="section" id="contact">
  <div className="box-content">
    <span className="span-section span-about ff-family-poppins-semi-b">Let's talk</span>
    <div className="figure contact-figure">
        
              <div className="planets two">
                <div className="ring"></div>

                <div className="seven">
                  
                </div>
            
          </div>
        
    </div>
    <div className="container-contact">
      <div className="box-contact ff-family-poppins-regular">
        <form method='POST' className="form-contact" name="contact" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact"/>
          <div className="form-group ">
            <input required="required" type="text" name="name" id="name"/>
            <label htmlFor="">Name</label>
            <span className="bar"></span>
          </div>
          <div className="form-group">
          
            <input required="required" type="text" name="email" id="email"/>
            <label htmlFor="">Email</label>
            <span className="bar"></span>
          </div>
          <div className="form-group">
          
          <input required="required" type="text" name="reason" id="reason"/>
          <label htmlFor="">Reason</label>
          <span className="bar"></span>
        </div>
          <div className="form-group">
            <textarea required="required" maxLength="200" rows="4" name="message" id="message"></textarea>
            <label htmlFor="">Message</label>
            <span className="bar"></span>
          </div>
          <div className="form-group">
            <button type='submit' name="submit" id="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact