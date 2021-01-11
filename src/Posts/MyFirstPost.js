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

class MyFirstPost extends React.Component {
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
  
   <MDBLink to='/myfirstpost' className='disabled'><p id='postLinkA' className='text-center'>• My First Post</p></MDBLink>
   <MDBLink to='/lablife'><p id='postLink' className='text-center'>• Lab Life</p></MDBLink>
   <MDBLink to='/generalassembly'><p id='postLink' className='text-center'>• General Assembly</p></MDBLink> 
   <MDBLink to='/afterbootcamp'><p id='postLink' className='text-center'>• After Bootcamp</p></MDBLink> 
      
           </MDBCol>
          
           <MDBCol md='9' >
              <div id='blogWrapper' className='p-4 m-n3 rgba-black-light'>
       
      
      <MDBCard reverse className='disabled blue-grey lighten-5 p-2'>
        
          <MDBCardImage
            top
            src='https://i.imgur.com/KZR2K2Q.jpg?1'
            alt='MDBCard image cap'
            className='rounded'
          />
          <MDBCardBody className='px-5 z-depth-1'>
     
              <p className='text-right dat'>7/14/2020</p>
           
            <h1>My First Post</h1>
            <hr />
            <p className='p-5'>
           My first blog post! Its been a while that I wanted to start a blog. Here goes...
<br/><br/>
It took me some time to take the action and setup a blog to share my development adventures.
 Well now that I am here let me write down what interests me as a developer.
 As a programmer I am always thrilled to solve problems and build something useful.
This blog would be a medium for me to share my experiences with various technologies and my efforts to build and contribute code to the open source community. 
<br/><br/>          
I may be relatively new to the world of software but I am excited and eager to learn.    
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

export default MyFirstPost;