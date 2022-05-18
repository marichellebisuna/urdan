import React from 'react'
import BtnLogin from './BtnLogin'
// import {providers, signIn, getSession, csrfToken } from 'next-auth/react'

const OAuth = ({providers, csrfToken}) => {
 console.log( csrfToken)
  return (
    <div>
      {/* <BtnLogin 
        provider=''
        bgColor='#f2573f'
        csrfToken={csrfToken}
      /> */}
       <BtnLogin 
        provider={providers.google}
        bgColor='#f2573f'
        csrfToken={csrfToken}
      />
      <BtnLogin 
        provider={providers.facebook}
        bgColor='#0404be'
        csrfToken={csrfToken}
      />
      <BtnLogin 
        provider={providers.github}
        bgColor='#444'
        csrfToken={csrfToken}
      />
    </div>
  )
}

export default OAuth

export async function getServerSideProps(context) {

  return {
      props:{
        providers: await providers(context),
        session: await getSession(context),
        csrfToken: await csrfToken(context) 
      }
     
    }

}