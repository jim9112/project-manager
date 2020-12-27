import { useState } from 'react';

const useForm = () => {
  const [input, setInput] = useState({});
  const handleInput = (e: React.ChangeEvent) => {
    const T = e.target as HTMLInputElement;
    if (!T.id) {
      console.log(T);
    } else {
      setInput({ ...input, [T.id]: T.value });
    }
  };

  return { handleInput, input, setInput };
};

export default useForm;
