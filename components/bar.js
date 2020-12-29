
export default function Bar(props) {

    function dispatchSimpleEvent(){
        props.onClick()
    }

    return <div>
        hello {props.name}, 
        I'm a Bar component<br />
        <button onClick={dispatchSimpleEvent}>hey, click me!</button>
    </div>
}