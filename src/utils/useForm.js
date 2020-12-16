import { useState } from 'react';

const useForm = () => {
  const [input, setInput] = useState({});
  const handleInput = (e, name) => {
    if (!e.target.id) {
      setInput({ ...input, [name]: e.target.value });
    } else {
      setInput({ ...input, [e.target.id]: e.target.value });
    }
  };

  return [handleInput, input, setInput];
};

export default useForm;
