const Hello = (props) => {
  console.log('🚀🚀🚀 ~ Hello ~ props:', props.name); // 'Taro'

  // propsを書き換えようとするとエラーになる
  // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
  // props.name = 'Jiro';

  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
