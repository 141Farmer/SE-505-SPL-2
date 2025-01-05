import React from "react";

const Button=({children,type='button',onClick})=>{
          return (
                    <button 
                              type={type}
                              onClick={onClick}
                              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                              >
                                        {children}
                              </button>
          );
};

export default Button;