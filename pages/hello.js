const HelloWorld = (props) => {
  return <div>Hello World {props.children || 'user'}</div>;
};

export default function Hello() {
  return (
    <div>
      <HelloWorld></HelloWorld>
    </div>
  );
}
