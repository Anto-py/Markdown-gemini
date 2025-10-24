
import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  disabled: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder, disabled }) => {
  return (
    <div className="flex flex-col h-full">
      <label htmlFor="input-text" className="text-lg font-semibold mb-2 text-cyan-400">Plain Text Input</label>
      <textarea
        id="input-text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-grow w-full p-4 bg-slate-800 border-2 border-slate-700 rounded-lg shadow-inner focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300 resize-none text-slate-300 placeholder-slate-500 disabled:opacity-50 min-h-[400px] md:min-h-[500px]"
      />
    </div>
  );
};

export default TextInput;
