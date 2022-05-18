import React, { useState } from 'react'
import {signIn } from 'next-auth/react'
import ButtonLoader from '../layout/ButtonLoader'

const BtnLogin = ({ provider, bgColor, csrfToken, options}) => {
  const [load, setLoad] = useState(false);  
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await signIn(provider.id, options)
    setLoading(false)
  }
  return (
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="csrfToken" defaultValue={csrfToken} />  
        <button type="submit" className="btn w-100 my-2 py-3"
        style={{ background: `${bgColor}`, color: '#eee'}} disabled={loading ? true : false}>
        { load ? <ButtonLoader /> : `Sign in with ${provider.name}`}
        </button>     
    </form> 
  )
}


export default BtnLogin

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({ req });

//   if (session) {
//     return {
//       redirect: { destination: "/" },
//     };
//   }

//   return {
//     props: {
//       providers: await providers(context),
//       csrfToken: await csrfToken(context),
//     },
//   };
// }