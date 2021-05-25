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

class AfterBootcamp extends React.Component {
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
       <MDBLink to='/lablife'><p id='postLink' className='text-center'>• Lab Life</p></MDBLink>
       <MDBLink to='/generalassembly'><p id='postLink' className='text-center'>• General Assembly</p></MDBLink> 
  
       <MDBLink to='/afterbootcamp' className='disabled'><p id='postLinkA' className='text-center'>• After Bootcamp</p></MDBLink> 
               </MDBCol>
              
               <MDBCol md='9' >
                  <div id='blogWrapper' className='p-4 m-n3 rgba-black-light'>
           
          
          <MDBCard className='disabled grey lighten-4 p-2'>      
             

   
          <MDBCardBody className='px-5'>
     
              <p className='text-right dat'>9/12/2020</p>
           
            <h1>After Bootcamp</h1>
            <hr />
            <p className='p-5'>
I had just barely left bootcamp and started sending applications in early 2020 when I first heard of the pandemic.
<br/><br/> 
As time went on it became apparent that finding a job was going to be even harder than I thought. Many companies began
that I wanted to apply for implemented a hiring freeze. The jobs that were left had much more competition than they normally would have.
<br/><br/> 
This is the situation that I am still in...
<br/><br/> 
With my only relevant education being a 3 month long bootcamp, my applictions are likely filtered out. 2020 has been a tough year for me but 
I have decided to use my free time to continue building my skillset.
It is tough getting rejection after rejection but eventually a company is going to take a chance on me.
<br/><br/> 
and when they do I will make sure they are getting the best employee possible!
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

export default AfterBootcamp;