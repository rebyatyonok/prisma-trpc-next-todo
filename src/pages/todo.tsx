import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';
import { UiLabel, UiButton, UiInput } from '../components/generic';

const Todo: NextPage = () => {
  const [inputValue, setInputValue] = useState('');

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    if (inputValue.trim() === '') return;

    event.preventDefault();
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <section className="flex items-center justify-center h-full flex-col gap-4">
        <form onSubmit={handleFormSubmit} className="flex gap-2">
          <UiLabel>
            <UiInput placeholder='What needs to be done?' onChange={handleInputChange} />
          </UiLabel>

          <UiButton className="bg-teal-300" type="submit">Add</UiButton>
        </form>
      </section>
    </>
  );
};

export default Todo;
