
export async function getServerSideProps(context) {
    const id = context.query.id
    return {
        props: {
            id: id
        }
    }
}

export default function Product(props) {
    return <p>Show Product with id {props.id} </p>
}