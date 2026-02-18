import React from 'react';

export const MeshBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      
      <div className="absolute -top-[10%] -left-[10%] w-1/2 h-1/2 rounded-full bg-[#4CAF50]/10 blur-[100px]" />
      
      <div className="absolute -bottom-[10%] -right-[10%] w-1/2 h-1/2 rounded-full bg-[#03A9F4]/10 blur-[100px]" />
      
      <div className="absolute top-[40%] left-[30%] w-2/5 h-2/5 rounded-full bg-[#81C784]/5 blur-[120px]" />
      
    </div>
  );
};