const Filter = ({ value, onChange }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      filter shown with <input value={value} onChange={onChange} />
    </form>
  );
};

export default Filter;
