import Profile from './components/Profile';
import Container from './components/Container';

const profile = [
  { name: 'Takashi', age: 19, country: 'Japan' },
  { name: 'Jane', age: 28, country: 'UK', color: 'red' },
];

const Example = () => {
  return (
    <div>
      <Container title="1: Childrenをネストで記述">
        {/* ネストして記述する事で、ContainerのchildrenとしてProfileコンポーネントを渡す事ができる */}
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>

      <Container
        title="2: Childrenを配列で記述"
        // keyを指定しないと、ブラウザ側で以下エラーがコンソールに出力される
        // Example.jsx:18 Warning: Each child in a list should have a unique "key" prop.
        children={[
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />,
        ]}
      />

      <Container
        title="Childrenを利用せず、別名かつ個別に記述"
        first={<Profile {...profile[0]} />}
        second={<Profile {...profile[1]} />}
      />
    </div>
  );
};

export default Example;
