const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  const animalList = [];

  // for文で渡す (文はjsx内に直接記述できない事もあり、あまり利用しない)
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  // Map関数を利用した記述(右辺は式なので、jsx内に直接記述する事も可能)
  const externalAnimals = animals.map((animal) => (
    <li>外部記述Map, {animal}</li>
  ));

  return (
    <>
      <h3>配列の操作</h3>
      <div>
        <p>for文</p>
        <ul>{animalList}</ul>
      </div>
      <div>
        <p>jsx外で記述したMap展開</p>
        <ul>{externalAnimals}</ul>
      </div>
      <div>
        <p>jsx内に直接記述したMap展開</p>
        <ul>
          {animals.map((animal) => (
            <li>内部記述Map {animal}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Example;
