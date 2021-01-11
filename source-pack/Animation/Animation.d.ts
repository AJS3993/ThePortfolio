import * as React from 'react';

declare class MDBAnimation extends React.Component<
  {
    className?: string;
    children?: React.ReactNode;
    count?: number;
    delay?: string;
    duration?: number;
    infinite?: boolean;
    reveal?: boolean;
    tag?: string | void;
    type:
      | 'flash'
      | 'bounce'
      | 'pulse'
      | 'rubberBand'
      | 'shake'
      | 'headShake'
      | 'swing'
      | 'tada'
      | 'wobble'
      | 'jello'
      | 'bounceIn'
      | 'bounceInDown'
      | 'bounceInLeft'
      | 'bounceInRight'
      | 'bounceInUp'
      | 'bounceOut'
      | 'bounceOutDown'
      | 'bounceOutLeft'
      | 'bounceOutRight'
      | 'bounceOutUp'
      | 'fadeIn'
      | 'fadeInDown'
      | 'fadeInDownBig'
      | 'fadeInLeft'
      | 'fadeInLeftBig'
      | 'fadeInRight'
      | 'fadeInRightBig'
      | 'fadeInUp'
      | 'fadeInUpBig'
      | 'fadeOut'
      | 'fadeOutDown'
      | 'fadeOutDownBig'
      | 'fadeOutLeft'
      | 'fadeOutLeftBig'
      | 'fadeOutRight'
      | 'fadeOutRightBig'
      | 'fadeOutUp'
      | 'fadeOutUpBig'
      | 'flipInX'
      | 'flipInY'
      | 'flipOutX'
      | 'flipOutY'
      | 'lightSpeedIn'
      | 'lightSpeedOut'
      | 'rotateIn'
      | 'rotateInDownLeft'
      | 'rotateInDownRight'
      | 'rotateInUpLeft'
      | 'rotateInUpRight'
      | 'rotateOut'
      | 'rotateOutDownLeft'
      | 'rotateOutDownRight'
      | 'rotateOutUpLeft'
      | 'rotateOutUpRight'
      | 'hinge'
      | 'rollIn'
      | 'rollOut'
      | 'zoomIn'
      | 'zoomInDown'
      | 'zoomInLeft'
      | 'zoomInRight'
      | 'zoomInUp'
      | 'zoomOut'
      | 'zoomOutDown'
      | 'zoomOutLeft'
      | 'zoomOutRight'
      | 'zoomOutUp'
      | 'slideInDown'
      | 'slideInLeft'
      | 'slideInRight'
      | 'slideInUp'
      | 'slideOutDown'
      | 'slideOutLeft'
      | 'slideOutRight'
      | 'slideOutUp';
    style?: {};
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    onAnimationIteration?: () => void;
    [rest: string]: any;
  },
  any
> {}

export default MDBAnimation;
