import React from 'react'

const Loading = ({ className }) => {
  return (
    <div className="absolute h-auto w-auto top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 z-50" >
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
    </div>
  )
}

export default Loading