import React, { useState, useEffect } from 'react'
import Breadcrumb from '../Breadcrumb'
import Link from 'next/link'
import {providers, signIn, getSession, csrfToken, getProviders, getCsrfToken } from 'next-auth/react'
import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../redux/actions/userActions'


const Login = () => {      
  const [providers, setProviders] = useState({});
  const [csrfToken, setCsrfToken] = useState(null);
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);  

  const { user, loading } = useSelector(state => state.loadedUser)

  const dispatch = useDispatch()

//   useEffect(() => {
//     if(session) return Router.push('/');
//   },[session])

  useEffect(() => {
      if (!user) {
          dispatch(loadUser())
      } 
  }, [dispatch, user])

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    
      const csr = await getCsrfToken();
      setCsrfToken(csr);   
      
      const data = await getSession();
      setSession(data); 
     })();
  }, []);

console.log({providers, csrfToken, session})

  const submitHandler = async (e) => {
      e.preventDefault();
      setLoad(true);
      const result = await signIn('credentials', {
          redirect: false,
          email,
          password
      })
  
      localStorage.setItem('userInfo', JSON.stringify(result))

      console.log(result)
      
      setLoad(false)

      if (result.error) {
          toast.error(result.error);
      } else {
          window.location.href = '/'
      }

  }


  return (
    <>
    <div><Breadcrumb title='Login'/></div>
        <div className="login-register-area pb-100 pt-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 offset-lg-2">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">
                                <Link href="/login">
                                <a className="active"  >
                                    <h4> login </h4>
                                </a></Link>
                                
                                    {!user && <Link href="/register"><a  >
                                    <h4> register </h4>
                                </a></Link>}
                                
                            </div>
                            <div id="lg1" className="tab-pane active">
                                    <div className="login-form-container">
                                        <div className="login-register-form">
                                            <form action="#" method="post" onSubmit={submitHandler}>
                                                <input name="user-name" placeholder="Username" type="email"                         id="email_field"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}/>
                                                <input type="password" name="user-password" placeholder="Password"
                                                id="password_field"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}/>
                                                {/* <div className="login-toggle-btn">
                                                    <input type="checkbox"/>
                                                    <label>Remember me</label>
                                                    <Link href="/password/forgot" className="float-right mb-4">Forgot Password?</Link>
                                                </div> */}
                                                <div className='d-flex justify-content-between align-items-baseline'>
                                                    <div className="button-box btn-hover">
                                                        <button id="login_button"
                                                            type="submit"
                                                            className="btn btn-block py-3"
                                                            
                                                            disabled={loading ? true : false}>{load ? <ButtonLoader /> : 'LOGIN'}</button>
                                                    </div>
                                                    <div>
                                                        <Link href="/password/forgot" className="float-right mb-4">Forgot Password?</Link>
                                                    </div>                           
                                                </div>
                                                
                                            </form>
                                        </div>
                                         
                                        <div style={{maxWidth: '450px', width: '100%'}}
                                        className="my-3 mx-auto">                                            
                                           <div className="center">         
                                                <div className="text-center my-4">Choose a Login Method</div>
                                           </div>
  
     {providers &&
        Object.values(providers).map((provider) => (

           
          <div key={provider.name}>
        { provider.id==='credentials'?null :     
            <button
              onClick={() => {
                signIn(provider.id);
              }}
              type="submit" className="btn w-100 my-2 py-3"
              style={provider.id==='google'?{ background: '#f2573f', color: '#eee' }:provider.id==='facebook'?{ background: '#0404be', color: '#eee' }:{ background: '#444', color: '#eee' }}
             
            >
              Sign in with {provider.name}
            </button>
}
          </div>
        ))}

{/* <OAuth providers={providers} csrfToken={csrfToken} /> */}

{console.log({providers, csrfToken, session})}
    
                                                {/* <button type="submit" className="btn w-100 my-2 py-3"
                                                    style={{ background: '#f2573f', color: '#eee'}} onClick={() => ()=>signIn()}>Sign in with Google</button>
                                                <button type="submit" className="btn w-100 my-2 py-3"
                                                    style={{ background: '#0404be', color: '#eee'}} onClick={() => signIn()}>Sign in with Facebook</button>
                                                <button type="submit" className="btn w-100 my-2 py-3"
                                                    style={{ background: '#444', color: '#eee'}} onClick={() => signIn()}>Sign in with Github</button> */}
                                        </div>                         
                                    </div>
                            </div>           

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}
 


export default Login



export async function getServerSideProps (context) {
    return {
      props: {
       
        session: await getSession(context),
       
      }
    }
  }

