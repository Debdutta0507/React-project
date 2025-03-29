const Pizza = (props) => {
  return (
    <div>
      <h2 className="pizza__heading">{props.name}</h2>
      <div className="pizza_description">{props.description}</div>
    </div>
  );
};
export default Pizza;
