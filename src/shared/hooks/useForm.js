import { useState } from 'react';

const useForm = (initialState, onSubmit) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formState);
  };

  return { formState, handleInputChange, handleSubmit };
};

export default useForm;
