import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь', price: '200' },
    { id: 1, value: 0, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log('handle reset');
  };
  const handleIncrement = (id) => {
    const increment = counters.map((item) => {
      if (item.id === id) {
        return { ...item, value: item.value + 1 };
      }
      return item;
    });
    setCounters(increment);
  };

  const handleDecrement = (id) => {
    const decrement = counters.map((item) => {
      if (item.id === id) {
        return { ...item, value: item.value - 1 };
      }
      return item;
    });
    setCounters(decrement);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
