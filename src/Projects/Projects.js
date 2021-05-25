import React from 'react';
import {
  MDBContainer,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon,
  MDBBtn,
  MDBCardBody,
  MDBNavLink,
  MDBNavItem,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavbarToggler,
  MDBNavbar
} from 'mdbreact';
import './Projects.css';
import LightboxPage from '../Lightbox';

class Projects extends React.Component {
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
      <div id='projects'>

<MDBNavbar expand='md' fixed='top' className='z-depth-0 m-0 p-0' scrolling>
       
       <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
       <MDBCollapse
         id='navbarCollapse'
         isOpen={this.state.collapseID}
         navbar
       >
       
     <MDBNavbarNav left>
     <h3 className='white-text ml-3'>Andrew <span id='glowie' className='yellow-text font-weight-bold'> ⅉ </span> Smith </h3>         </MDBNavbarNav>
           <MDBNavbarNav right>
         
           <MDBNavItem>
           <MDBNavLink className='m-3' id='NB' to="/blog">
          Blog
        </MDBNavLink>
                </MDBNavItem> 

           <MDBNavItem>
                <MDBNavLink id='NBA' className='m-3' to="" disabled>
          Portfolio
        </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
           <MDBNavLink className='m-3' id='NB' to="/">
     Home
   </MDBNavLink>
           </MDBNavItem>
           
         </MDBNavbarNav>
         
       </MDBCollapse>
  
   </MDBNavbar>

   <section>
       
       
        <MDBContainer className='justify-content-around align-items-center pt-5'>
          
          
          <MDBRow className='justify-content-around pt-5 mt-3 w-100'>
           
           
            {/* <MDBCol md='4'>
              <MDBCard className='testimonial-card text-center m-4 rgba-black-light border z-depth-1' narrow>
              
                <MDBCardBody>
                  <MDBCardTitle className='white-text'>
                    <strong>Andrew J Smith</strong>
                  </MDBCardTitle>
                  <h5 className='white-text'>
                    Software Engineer
                  </h5>
                  <p className='white-text'>Austin, TX</p>
                  <p className='card-text mt-3 white-text'>
                   
               I am a software engineer with a background in science and healthcare. I have built many projects both front and back end. I currently have the most experience in javascript, react and python but I am always learning more. 
               </p>
                  <hr color='white'/>
                  
                  <a href='https://github.com/AJS3993'>
                  <MDBBtn social="git" size="sm" className='px-2'>
                    <MDBIcon fab icon="github" className="pr-1" /> Github
                  </MDBBtn>
                  </a>

                <a href='https://www.linkedin.com/in/ajs3993/'>
                  <MDBBtn social="li" size="sm" className='px-2'>
                    <MDBIcon fab icon="linkedin-in" className="pr-1" /> Linkedin
                  </MDBBtn>
                </a>

                 <a href='https://i.imgur.com/Lv2Tfie.png'>
                  <MDBBtn social="gplus" size="sm" className='px-2'> 
                  <MDBIcon far icon="file-alt" /> Resume
                  </MDBBtn>
                  </a>
                </MDBCardBody>
              </MDBCard>
           
            </MDBCol> */}


            <MDBCol md='10' className='mb-5' >
           
         <MDBRow>
      <MDBCol md='4' className='p-3 '>
      <a href='https://pizzatime465.herokuapp.com/' target="_blank">
        <MDBCard
        id='pcard'
          className='card-image border-grey mb-1 z-depth-4'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/8nceaNH.png?1')"
          }}
        >
          <div className='text-white d-flex align-items-center rgba-black-strong py-3 px-2'>
            <div>
              
              <MDBCardTitle tag='h3' className='pt-1'>
                <strong>Ember</strong>
              </MDBCardTitle>
              <p className='white-text'>
                React
              </p>
              <a href='https://ajs3993.github.io/ecom/' target="_blank">
              <MDBBtn color='yellow' outline className='p-2'>
                 View 
              </MDBBtn>
              </a>
            </div>
          </div>
        </MDBCard>
        </a>
      </MDBCol>

      <MDBCol md='4' className='p-3 '>
      <MDBCard
      id='pcard'
          className='card-image border-grey mb-1 z-depth-4'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/YiT80Ww.png?1')"
          }}
        >
          <div className='text-white text-left rgba-black-strong py-3 px-2'>
            <div>
              
              <MDBCardTitle tag='h3' className='pt-1'>
                <strong>Mongoose Flights</strong>
              </MDBCardTitle>
              <p className='white-text'>
                Javascript + MongoDB
              </p>
              <a href='https://mongoose-flights3890654.herokuapp.com/' target="_blank">
              <MDBBtn color='yellow' outline className='p-2 '>
                 View 
              </MDBBtn>
              </a>
            </div>
          </div>
        </MDBCard>
      </MDBCol>


      <MDBCol md='4' className='p-3 '>
      <MDBCard
      id='pcard'
          className='card-image border-grey mb-1 z-depth-4'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/QwLb70q.png?4')"
          }}
        >
          <div className='text-white d-flex align-items-center rgba-black-strong py-3 px-2'>
            <div>
              
              <MDBCardTitle tag='h3' className='pt-1'>
                <strong>Groupie</strong>
              </MDBCardTitle>
              <p className='white-text'>
                Python + Django
              </p>
              <a href='https://groupie3993.herokuapp.com/' target="_blank">
              <MDBBtn color='yellow' outline className='p-2'>
                 View 
              </MDBBtn>
              </a>
            </div>
          </div>
        </MDBCard>
      
     
      </MDBCol>
      </MDBRow>

<MDBRow>
      <MDBCol md='4' className='p-3 '>
      <MDBCard
      id='pcard'
          className='card-image border-grey mb-1 z-depth-4'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/r414M0G.png?2')"
          }}
        >
          <div className='text-white text-left rgba-black-strong py-3 px-2'>
            <div>
              
              <MDBCardTitle tag='h3' className='pt-1'>
                <strong>MyBookShelf</strong>
              </MDBCardTitle>
              <p className='white-text'>
              Javascript + MongoDB
              </p>
              <a href='https://my-book-shelf789.herokuapp.com/' target="_blank">
              <MDBBtn color='yellow' outline className='p-2 '>
                 View 
              </MDBBtn>
              </a>
            </div>
          </div>
        </MDBCard>
        
        </MDBCol>

        <MDBCol md='4' className='p-3 '>
      <MDBCard
      id='pcard'
          className='card-image border-grey mb-1 z-depth-4'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/akoHktO.png?1')"
          }}
        >
          <div className='text-white d-flex align-items-center rgba-black-strong py-3 px-2'>
            <div>
              
              <MDBCardTitle tag='h3' className='pt-1'>
                <strong>Hangman</strong>
              </MDBCardTitle>
              <p className='white-text'>
                Javascript
              </p>
              <a href='https://ajs3993.github.io/WordGame/' target="_blank">
              <MDBBtn color='yellow' outline className='p-2'>
                 View 
              </MDBBtn>
              </a>
            </div>
          </div>
        </MDBCard>
     </MDBCol>


        <MDBCol md='4' className='p-3 '>
      <MDBCard
      id='pcard'
          className='card-image border-grey mb-1 z-depth-4'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/7pmldI3.png?1')"
          }}
        >
          <div className='text-white text-left rgba-black-strong py-3 px-2'>
            <div>
              
              <MDBCardTitle tag='h3' className='pt-1'>
                <strong>React Rolodex</strong>
              </MDBCardTitle>
              <p className='white-text'>
                React
              </p>
              <a href='https://ajs3993.github.io/React-Rolodex/' target="_blank">
              <MDBBtn color='yellow' outline className='p-2'>
                 View 
              </MDBBtn>
              </a>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>

            </MDBCol>
          </MDBRow>
          <LightboxPage/>
          </MDBContainer>
       
    
 </section>
          
      </div>
    );
  }
}

export default Projects;
