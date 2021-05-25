import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBRow,
  MDBCol,
  MDBMask,
  MDBView,
  MDBNavLink,
  MDBBtn,
  MDBIcon
} from 'mdbreact';
import './Landing.css';



class Landing extends React.Component {
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
      <div id='landing'>
        <MDBNavbar dark expand='md' fixed='top' className='z-depth-0' transparent>
       
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
            <MDBCollapse
              id='navbarCollapse'
              isOpen={this.state.collapseID}
              navbar
            >
            
          <MDBNavbarNav left>
         
                  </MDBNavbarNav>
                <MDBNavbarNav right>

                <MDBNavItem>
                <MDBNavLink className='m-3' id='NB' to="/blog">
          Blog
        </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                <MDBNavLink className='m-3' id='NB' to="/portfolio">
         Portfolio 
        </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                <MDBNavLink id='NBA' className='m-3' to="" disabled>
          Home 
        </MDBNavLink>
                </MDBNavItem>
                
              </MDBNavbarNav>
              
            </MDBCollapse>
       
        </MDBNavbar>

        <section id='home'>
          <MDBView>

         


            <MDBMask
              className=''
              overlay='gradient'
            >
              <MDBContainer className='h-100 p-0 m-0'>
                <MDBRow className='flex-center'>
                 
                 <MDBCol md='3' className='rgba-black-strong h-100 p-2'>
                 <MDBContainer className='rounded flex-center h-25 p-0'>
<img src='https://i.imgur.com/Zik1Fr3.jpg' className='myPic z-depth-3' />
                 </MDBContainer>
                 <MDBContainer>
                 <h5 className='yellow-text pt-1'>
                    <strong>About Me</strong>
                  </h5>

                  <hr color='yellow'/>
                 <p className='white-text p-2 about'>
                I am a software engineer with a background in science and healthcare. I have built many projects both front and back end. I currently have the most experience in javascript, react and python but I also have some experience with many other technologies and I am always learning more. 
                </p>
                 </MDBContainer>
                 <br/>
                 <MDBContainer>
                 <h5 className='yellow-text'>
                    <strong>Social Media</strong>
                  </h5>

                  <hr color='yellow'/>
                  <a href='https://www.linkedin.com/in/andrewjsmith3993/'>
                  <MDBBtn size="sm" tag="a" floating social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      </a>
      <a href='https://www.youtube.com/channel/UCHQVTanFovgdGd4GcQ9aBVQ'>
      <MDBBtn size="sm" tag="a" floating social="yt">
        <MDBIcon fab icon="youtube" />
      </MDBBtn>
      </a>
      <a href='https://github.com/AJS3993'>
      <MDBBtn size="sm" tag="a" floating social="git">
        <MDBIcon fab icon="github" />
      </MDBBtn>
      </a>
    
                 </MDBContainer>
                 </MDBCol>
                  <MDBCol md='8' className='text-center text-md-right mb-5'>
                    <div  className='white-text'>
                    <h1>Andrew <span id='glowie' className='yellow-text font-weight-bold'> ⅉ </span> Smith </h1>
                    
                      <h5 id='glowie' className='yellow-text'> Web Development </h5>
                      <br />
                      
                    </div>
                  </MDBCol>
  
                  <MDBCol md='1' className='p-0'><span className='zz'></span></MDBCol>
                  
                </MDBRow>
                
              </MDBContainer>
              
            </MDBMask>
           
  {/* <Particles
    params={{
      "style": {
        "height":"100%"
 },
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 2,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} /> */}
 
           
          </MDBView>
          
        </section>

       
          
      </div>
    );
  }
}

export default Landing;
