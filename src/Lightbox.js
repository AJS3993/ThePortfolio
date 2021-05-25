import React, { Component } from 'react';
import { MDBLightbox, MDBContainer } from 'mdbreact';

class LightboxPage extends Component {
  state = {
    heading: [
      { src: 'https://i.imgur.com/BzmgQ02m.png?1' },
      { src: 'https://i.imgur.com/5x9ptrcm.png' },
      { src: 'https://i.imgur.com/voUIEf5m.png?1' },
      { src: 'https://i.imgur.com/ah4Fw8qm.png?1' },
      { src: 'https://i.imgur.com/mBThByV.png?1' },
      { src: 'https://i.imgur.com/dBb5F1fm.png?1' },
      { src: 'https://i.imgur.com/RcIaPv0m.png' },
      { src: 'https://i.imgur.com/CVOEEdxm.png?1' },
      { src: 'https://i.imgur.com/BNRD6Ff.jpg?1' },
      { src: 'https://i.imgur.com/HVn4fdRm.png?1'},
      { src: 'https://i.imgur.com/Y5xOVqxm.png?1'},
      { src: 'https://i.imgur.com/enAnXdfm.jpg?1'}
    ]
  };

  render() {
    return (
      <MDBContainer className='pb-5'>
        <MDBLightbox className='' md='3' images={this.state.heading} />
      </MDBContainer>
    );
  }
}

export default LightboxPage;