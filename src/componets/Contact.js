import React from 'react'

const Contact = () => {
  return (
        <>
           <div className="about bg-dark mt-2">
        <h1 style={{color:"white",textAlign:"center"}}>Contact Us</h1>
      </div>
        
          {/* <div className="col-sm-12" id="contact">
    <h2 className="w3-text-light-grey">Contact Me</h2>
    <hr style={{width:"200px"}} className="w3-opacity">
   </hr>
    <div className="w3-section">
      <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Uttar Pradesh, India</p>
      <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> +91-7827594143</p>
      <p><i classClassname="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> spyadav14699@gmail.com</p>
    </div>
    <br></br>
    <div id="socialmedia1">
  
  
      <a href="https://twitter.com/SPYADAVg" target="_blank">
        <i id="socialteet" class="fa">&#xf099;</i>
      </a> 
      <a href="https://www.linkedin.com/in/surya-yadav-924b311a1/" target="_blank" >
       <i id="socialteet" class="fa">&#xf08c;</i>
     </a>
     <a href="https://github.com/spyadav14699" target="_blank" >
       <i id="socialteet" class="fa">&#xf09b;</i>
     </a>
     
       
       
     </div>
    <p>Let's get in touch. Send me a message:</p>

    <form action="mailto:spyadav14699@gmail.com" method="post" enctype="text/plain" target="_blank">
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></input></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"></input></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"></input></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"></input></p>
      <p>
        <input type="submit" value="SEND MESSAGE" class="w3-button w3-light-grey w3-padding-large">
        </input>
        <input type="reset" value="RESET" class="w3-button w3-light-grey w3-padding-large">
        </input>
      </p>
    </form> 

  
         </div>  */}

         <div className='row'>
             <div className='col-sm-3'></div>
             <div className='col-sm-6 mt-4'>
             <a href='https://twitter.com/SrivastavChhavi'><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" height={"50px"}></img></a>
<a href='https://www.linkedin.com/in/chhavisrivastva/'><img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png" height={"50px"}></img></a>
<a href='https://github.com/chhavi48'><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" height={"50px"}></img></a>
<a href='https://www.quora.com/profile/Chhavi-Srivastav-6'><img src="https://www.benlcollins.com/wp-content/uploads/2016/01/quora.png" height={"50px"}></img></a>
{/* <a href='https://medium.com/@sichhavi48'><img src="https://miro.medium.com/max/1146/1*jcY-BmXNNrWTJCOchzqJrQ.jpeg" height={"50px"} width={"50px"}></img></a> */}
             <form>
  <div className="form-group">
  <div className="form-group">
    <label for="exampleInputName1">Name</label>
    <input type="text" className="form-control" id="exampleInputName1" placeholder="Name"></input>
  </div>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputMessage1">Message</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="enter your msgs.."></input>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-dark mt-2">Submit</button>
</form>

             </div>
             <div className='col-sm-3'></div>
         </div>

         <div className='row'>
             <div className='col-sm-12'>

             </div>
         </div>
        </>
  )
}

export default Contact