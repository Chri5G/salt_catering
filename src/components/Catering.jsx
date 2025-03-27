import React from 'react'

export default function Catering() {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
    <img 
      src="/imgs/logo_black.jpg" 
      alt="Spinning Image"
      className="w-40 h-40 animate-spinY"
    />
    <p>Under Construction</p>
  </div>

  <style>
    {`
      @keyframes spinY {
        from {
          transform: rotateY(0deg);
        }
        to {
          transform: rotateY(360deg);
        }
      }
      .animate-spinY {
        animation: spinY 3s linear infinite;
      }
    `}
  </style>
</>
  )
}
