// POINT getStaticPropsでSGを実装
export default function IndexPage({ message }) {
  return <h3>SG:{message}</h3>;
}

export async function getStaticProps() {

    // console.log('getStaticProps');

    return {
        props: { message: 'From Static Props' }
    }
}