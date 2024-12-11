// POINT [SSR]とgetServerSideProps
import { useEffect, useState } from "react"

// export default function SSR({message}) {
export default function SSR() {
    console.log('hello')
    // console.log(message)

    useEffect(() => {
        console.log('useEffect');
        window.localStorage.setItem('key', 'value');
        document.cookie = 'val=0; path=/;'
    }, [])

    const [state, setState] = useState('bye');
    const val = 0
    return (
        <>
            <h3>SSR</h3>
            <h3>{state}</h3>
        </>
    )
}

// export async function getServerSideProps(context) {

//     const { cookie } = context.req.headers;
//     console.log('cookie', cookie);
//     console.log('getServerSideProps is executed')
//     return {
//         // redirect: {
//         //     destination: '/',
//         //     permanent: false
//         // },
//         props: { message: 'From Server Side Props' }
//     }
// }
