import React from 'react';
interface IFilter {
  value: string;
  setValue: (value: string) => void;
}

const Filters = ({ value, setValue }: IFilter) => {
  const handleOnchange = (e: React.ChangeEvent) => {
    const target = e.target as any;
    setValue(target.value);
  };

  return (
    <section>
      <form>
        <input value={value} type="text" name="giphname" onChange={(e) => handleOnchange(e)} />
      </form>
    </section>
  );
};

export default Filters;
