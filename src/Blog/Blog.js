import React from 'react';
import {
  MDBLink,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBNavLink,
  MDBNavItem,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavbarToggler,
  MDBNavbar,
  MDBCardImage,
  MDBCardText,
} from 'mdbreact';
import './Blog.css';

class Blog extends React.Component {
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
      <div id='blog'>

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
   <MDBLink to='/generalassembly'><p id='postLink' className='text-center'>• General Assembly</p></MDBLink> 
   <MDBLink to='/afterbootcamp'><p id='postLink' className='text-center'>• After Bootcamp...</p></MDBLink> 
    
           </MDBCol>
          
            <MDBCol md='9' >
              <div id='blogWrapper' className='p-4 m-n3 rgba-black-light'>
         <MDBRow>
      <MDBCol md='4' className='p-2 '>
      
      <MDBCard className='rgba-white-slight white-text'>
          
      <MDBLink to='/myfirstpost'>
              
          <MDBCardImage
            top
            src='https://i.imgur.com/JK4H6wB.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          </MDBLink>
          <MDBCardBody className='pt-0'>
     
              <p id='date' className='text-right my-0'>7/14/2020</p>
           
            <h5>My First Post</h5>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
           My first blog post! Its been a while that I wanted to start a blog. Here goes...
            </MDBCardText>
            <MDBLink to='/myfirstpost' className='white-text d-flex justify-content-end'>
              <h5 id='readMore'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </MDBLink>
          </MDBCardBody>
        </MDBCard>
  
      </MDBCol>

      <MDBCol md='4' className='p-2 '>
      
      <MDBCard className='rgba-white-slight'>
      <MDBLink to='/lablife'>
          <MDBCardImage
            top
            src='https://media.gettyimages.com/photos/woman-with-pcr-tubes-picture-id697550241'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          </MDBLink>
          <MDBCardBody className='pt-0'>
          <p id='date' className='text-right my-0'>7/24/2020</p>
           
            <h5 className='white-text'>Lab Life</h5>
            <hr className="hr-light"/>
            <MDBCardText className='white-text'>
              Once upon a time a wanted to spend my whole life in the lab. Then I got there...
            </MDBCardText>
            <MDBLink to='/lablife' className='white-text d-flex justify-content-end'>
              <h5 id='readMore'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </MDBLink>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>

   
      <MDBCol md='4' className='p-2'>
      
      <MDBCard className='rgba-white-slight white-text'>
          <MDBLink to='/generalassembly'>
          <MDBCardImage
            top
            src='https://i.imgur.com/WqRWfNJ.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          /></MDBLink>
          <MDBCardBody className='pt-0'>
          <p id='date' className='text-right my-0'>8/2/2020</p>
           
            <h5>General Assembly</h5>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
              My first major step into the world of software engineering. I had no idea what I was getting into...
            </MDBCardText>
            <MDBLink to='/generalassembly' className='white-text d-flex justify-content-end'>
              <h5 id='readMore'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </MDBLink>
          </MDBCardBody>
        </MDBCard>
     
      </MDBCol>
    
      
     


        <MDBCol md='1' className='p-2'>
      
      </MDBCol>
    </MDBRow>
    </div>
            </MDBCol>
          </MDBRow>
          
          </div>
       
        
 </section>
          
      </div>
    );
  }
}

export default Blog;


