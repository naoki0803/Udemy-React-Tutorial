import './Container.css';

const Container = ({
  title,
  children /** Example.jsxでネストしたProfileがchildren props として取得できる*/,
  first,
  second,
}) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
      {second}
      {first}
    </div>
  );
};

export default Container;
