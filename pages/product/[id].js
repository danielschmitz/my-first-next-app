
export async function getStaticPaths(context) {
    const posts = [1, 2, 3, 4, 5];
    const paths = posts.map((id) => ({
      params: { id: `${id}` },
    }));
    return { paths, fallback: true };
  }


export async function getStaticProps ({params}) {
    const id = params.id

    // Dummy get Product from table
    const product = {
        id: `${id}`,
        name: `Product ${id}`
    }
    console.log(`dummy: get product from table with id ${id}`)

    return {
        props: {
            product
        }
    }
}

export default function Product(props) {
    if (!props.product) return null
    return <p>Show Product with id {props.product.id} and name '{props.product.name}' </p>
}