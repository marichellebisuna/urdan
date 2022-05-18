import Login from '../components/auth/Login'
// import { getSession } from 'next-auth/client'
import { providers, signIn, getSession, csrfToken,  } from "next-auth/react";

export default function LoginPage({session}) {
    console.log(session)
    
    return (
        <>
            <Login />
        </>
    )
}


export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
  
    if (session) {
      return {
        redirect: { destination: "/" , permanent: false},
      };
    }
  
    return {
      props: { session},
    };
  }