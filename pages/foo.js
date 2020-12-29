import Bar from "../components/bar";

export default function Foo() {

    function handleBarClickEvent() {
        console.log("The button inside Bar component was clicked")
    }

  return (
    <div>
      <b>This is a Foo Page</b>
      <br/>
      <Bar name="user" onClick={handleBarClickEvent}></Bar>
    </div>
  );
}
