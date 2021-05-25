import React from 'react';
import {
  MDBLink,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBNavLink,
  MDBNavItem,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavbarToggler,
  MDBNavbar
} from 'mdbreact';
import './post.css';

class LabLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  render() {
    return (
      <div id='blog1'>

<MDBNavbar dark expand='md' fixed='top' className='z-depth-0' scrolling>
       
       <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
       <MDBCollapse
         id='navbarCollapse'
         isOpen={this.state.collapseID}
         navbar
       >
       
     <MDBNavbarNav left>
     <h3 id='glowie' className='blogT'>Console.Blog </h3>
             </MDBNavbarNav>
           <MDBNavbarNav right>
         
           <MDBNavItem>
           <MDBLink id='NBA' className='m-3 pt-1' to="" disabled>
          Blog
        </MDBLink>
                </MDBNavItem> 

           <MDBNavItem>
           <MDBLink className='m-3 pt-1' id='NB' to="/portfolio">
         Portfolio
        </MDBLink>
                </MDBNavItem>

                <MDBNavItem>
           <MDBLink className='m-3 pt-1' id='NB' to="/">
     Home
   </MDBLink>
           </MDBNavItem>
           
         </MDBNavbarNav>
         
       </MDBCollapse>
  
   </MDBNavbar>

   <section className='mdb-color darken-3'>
       
   <div className='pt-5'>
          
          
          <MDBRow className='pt-5 mt-3'>
          <MDBCol md='2' className='mx-2 rgba-white-slight'>
          <MDBLink to='/blog' className=''><p id='bh' className='text-center py-2 mb-0' to="/blog">Blog Home</p></MDBLink> 
  
   <MDBLink to='/myfirstpost'><p id='postLink' className='text-center'>• My First Post</p></MDBLink>
   <MDBLink to='/lablife' className='disabled'><p id='postLinkA' className='text-center'>• Lab Life</p></MDBLink>
   <MDBLink to='/generalassembly'><p id='postLink' className='text-center'>• General Assembly</p></MDBLink> 
   <MDBLink to='/afterbootcamp' ><p id='postLink' className='text-center'>• After Bootcamp</p></MDBLink> 
      
           </MDBCol>
          
           <MDBCol md='9' >
              <div id='blogWrapper' className='p-4 m-n3 rgba-black-light'>
       
      
      <MDBCard className='disabled grey lighten-4 p-2'>      
          <MDBCardBody className='px-5'>
     
              <p className='text-right dat'>7/24/2020</p>
           
            <h1>Lab Life</h1>
            <hr />
            <p className='p-5'>
           I actually have a masters degree in molecular pathology. That means that I 
           know how to run genetic tests. The thing is, My experience getting it was not a
           good one...
            <br/><br/>
            I first decided that this was something I wanted to pursue when 
            my mother found out she had a certain genetic mutation that would greatly
increase the odds that she would develop breast cancer. Because they were able to 
detect the mutation, she was able to take the necessary action (Probably shouldn't go into detail here)
            <br/><br/>
I was around 12 at the time and I thought it was the coolest thing ever.
            <br/><br/>
            Even though I am fascinated by genetics, I always struggled to pay attention. I had never been a particularly good student but I had
            always managed to get by in school. Grad school was not a fun place for me. I quickly fell behind everyone else. The stress was unreal.
            I'm glad the program was only a year because I could not have lasted much longer. I managed to pass but just barely.
            <br/><br/>
We were required to complete an internship where we would actually work in a real lab. We each got to
choose which lab we wanted to go to but priority was given to students with higher grades. This meant I ended
up at the one no one else wanted...
            <br/><br/>
I would rather not say the name of the lab but it was located in a very small town. I lived in an extended stay hotel right next to the hospital in which
the lab was located. I was required to be there from 8 to 6 on weekdays. The thing was that they had NOTHING for me to do after the first few days.
For 10 hours a day and 5 days a week, I sat and did mostly nothing. The time d-r-a-g-g-e-d. 
            <br/><br/>
Every once in a while they would get me to perform a test. The ones that no one else wanted to do. They usually 
involved human ....ummm waste. I was so bored that I actually enjoyed running these tests. I was so bored I enjoyed doing ANYTHING.
             <br/><br/>
             Eventually it was over and I could not have been happier. The lab is not the place for me.
             <br/><br/> 
             I am glad there are people willing to work in places like that.
              Im really glad none of those peole are me.
              </p>
          </MDBCardBody>
        </MDBCard>
  
    
    </div>
      
     
    </MDBCol>

  
</MDBRow>
      
      </div>
   
    
</section>
      
  </div>
    );
  }
}

export default LabLife;