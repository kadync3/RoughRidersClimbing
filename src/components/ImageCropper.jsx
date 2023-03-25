import React, { useState, useRef, useEffect } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

import '../App.css';
 
// this component did not do the job I though it would but it could be usefull in a profile picture editor


class ImageCropper extends React.Component{ 
  constructor(){ 
    super();
    this.state= {
      imageDestonation: ''
    }
    this.imageElement= React.createRef();
  }

  componentDidMount(){
    const cropper = new Cropper(this.imageElement.current,{
      zoomable: false,
      scalable: false,
      aspectRatio:1,
      crop: () =>{
        const canvas = cropper.getCroppedCanvas();
        this.setState({imageDestonation: canvas.toDataURL('image/png')});
      }
    })
  }

  render(){
    return(
      <div>
        <div className='image-container'>
          <img ref={this.imageElement} src={this.props.src} alt="Source" />
        </div>
        <div className='image-preview'>
          <img  src={this.state.imageDestonation} />
        </div>
      </div>
    )
  }
}

export default ImageCropper;