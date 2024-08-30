<template>
    <div class="animated-background">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" class="svg-bg">
        <pattern id="pattern-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="100" y2="100" stroke="#e5e5e5" stroke-width="4" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="#e5e5e5" stroke-width="4" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines)" class="bg-lines bg-lines-1" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines)" class="bg-lines bg-lines-2" />
      </svg>
    </div>
  </template>
  
  <style scoped>
  .animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  
  .svg-bg {
    width: 100%;
    height: 100%;
  }
  
  .bg-lines {
    opacity: 0.15;
    animation: moveBg 120s linear infinite;
  }
  
  .bg-lines-1 {
    animation-duration: 120s;
  }
  
  .bg-lines-2 {
    animation-duration: 180s;
    animation-delay: -60s;
  }
  
  @keyframes moveBg {
    0% {
      transform: translateY(0) translateX(0);
    }
    100% {
      transform: translateY(-100%) translateX(-100%);
    }
  }
  </style>