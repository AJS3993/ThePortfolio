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
  MDBNavbar,
  MDBCardImage
} from 'mdbreact';
import './post.css';

class GeneralAssembly extends React.Component {
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
           <MDBLink className='m-3 pt-1' id='NB' to="/projects">
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
       <MDBLink to='/lablife'><p id='postLink' className='text-center'>• Lab Life</p></MDBLink>
       <MDBLink to='/generalassembly' className='disabled'><p id='postLinkA' className='text-center'>• General Assembly</p></MDBLink> 
       <MDBLink to='/afterbootcamp'><p id='postLink' className='text-center'>• After Bootcamp</p></MDBLink> 
      
               </MDBCol>
              
               <MDBCol md='9' >
                  <div id='blogWrapper' className='p-4 m-n3 rgba-black-light'>
           
          
          <MDBCard className='disabled grey lighten-4 p-2'>      
             

   <MDBCardImage
            top
            src='https://i.imgur.com/WqRWfNJ.jpg'
            alt='MDBCard image cap'
          />
          <MDBCardBody className='px-5'>
     
              <p className='text-right dat'>8/2/2020</p>
           
            <h1>General Assembly</h1>
            <hr />
            <p className='p-5'>
            My first major step into the world of software engineering. I had no idea what I was getting into...
<br/><br/>
In October of 2019 I decided to enroll in General Assembly Software Engineering.
 I came in knowing almost nothing about software engineering.
  Fortunately, the atmosphere was extremely friendly and everyone (teachers/students/alumni) was almost always willing to drop what they were doing to help.
<br/><br/>          
  I LOVED programming immediately. For some reason it just comes easily to me. I even became the one that some of my classmates would come to for help.
  I honestly wish it had lasted longer.
  <br/><br/>  
  A great beginning to a new career!

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

export default GeneralAssembly;