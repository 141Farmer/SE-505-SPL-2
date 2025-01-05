import React from "react";

const Input=({label, type='text',value,onChange})=>{
          return (
                    <div className="mb-4">
                              <label className="block text-sm font-medium mb-1">{label}</label>
                              <input 
                                        type={type}
                                        value={value}
                                        onChange={onChange}
                                        className="w-full p-2 border rounded"
                                        />
                    </div>
          );
};

export default Input;
