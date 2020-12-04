const { useState } = require('react');

const useForm = (e) => {
  e.preventDefault();
  const [input, setInput] = useState({});
  const handleInput = () => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  return [handleInput, input];
};

export default useForm;
