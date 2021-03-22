
export default function Bar(props) {

    function dispatchSimpleEvent(){
        props.onClick()
    }

    return <div>
        hello {props.name}, 
        I'm a Bar component<br />
        Test
        <button onClick={dispatchSimpleEvent}>hey, click me!</button>
    </div>
}