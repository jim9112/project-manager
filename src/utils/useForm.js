import { useState } from 'react';

const useForm = (e) => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  return [handleInput, input];
};

export default useForm;
