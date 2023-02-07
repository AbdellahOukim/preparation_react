function Child(props) {
  const { name, age } = props;

  return (
    <div>
      <label>name : </label>
      <span> {name} </span>
      <label>age : </label>
      <span> {age} </span>
    </div>
  );
}

export default Child;
