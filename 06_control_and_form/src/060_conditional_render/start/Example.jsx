import { useState } from 'react';

const Example = () => {
  const animals = ['Dog', 'Cat', null, 'Rat'];

  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {
          animals
            .filter((animal) => {
              const animalStr = animal ?? '';
              return animalStr.indexOf(filterVal) !== -1;
            })

            // if文
            // .map((animal) => {
            //   if (animal === 'Dog') {
            //     return <li key={animal}>{animal + '★'}</li>;
            //   } else {
            //     return <li key={animal}>{animal}</li>;
            //   }
            // })

            // 三項演算子(冗長1)
            // .map((animal) => {
            //   return (
            //     <li key={animal}>{animal === 'Dog' ? animal + '★' : animal}</li>
            //   );
            // })

            // // 三項演算子(冗長2) ※画面に表示しない''(空文字)が入っている
            // .map((animal) => {
            //   return (
            //     <li key={animal}> {animal + (animal === 'Dog' ? '★' : '')}</li>
            //   );
            // })

            // 三項演算子(DRY かつ && 表記)
            .map((animal) => {
              return (
                <li key={animal}>
                  {/* + 演算子の場合 animal === 'Dog' の結果がfalseの場合、文字列でfalseを表示してしまう*/}
                  {/* {animal + (animal === 'Dog' && '★')} */}
                  {/* reactで記述した場合booleanは画面に表示されないので、以下記述であれば、Dogの場合のみ★が表示される */}
                  {animal ?? 'Null | undefined'} {animal === 'Dog' && '★'}
                </li>
              );
            })

          // ?? (null | undefined)
        }
      </ul>
    </>
  );
};

export default Example;
