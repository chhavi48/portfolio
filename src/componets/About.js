import React from 'react'

const About = () => {
  return (
      <>
      <div className="about bg-dark">
        <h1 style={{color:"white",textAlign:"center"}}>About</h1>
      </div>
       <div className='row'>
           <div className='col-sm-1'></div>
           <div className='col-sm-5'>
                <img  className="photo"src="https://pbs.twimg.com/profile_images/1451523037040283651/iDf18qJ2_400x400.jpg" height="200px"/>
           </div>
           <div className='col-sm-6'>
                     <h4 className='aboutdata'>Full Stack Web-developer</h4>
                     <p className='para'>Hello 👋👋 Eveyone I am Chhavi Srivastav From Basti-Utter-preadesh. Currently  I am a student of MASAI SCHOOL.<br></br>
                     Analytical and detail-oriented Full Stack Web Developer <br></br>who is proficient with the MERN stack and good at user-centric solutions.<br></br> Collaborative, team player, and proficient in working with interdisciplinary teams and executing goal-oriented projects.<br></br> Strongly interested in obtaining a Software Developer position to work on enhancing the product 
                         
</p>
           </div>
       </div>

       
      {/* 
      ..............project............ */}
 
       </>
  )
}

export default About