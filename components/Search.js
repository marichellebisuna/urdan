import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Search = () => {
  const [name, setName] = useState(''); 

  const router = useRouter();

  const submitHandler = (e) => {
      e.preventDefault();

      if (name.trim()) {
          router.push(`/products?name=${name}`)
      } else {
          router.push('/products')
      }
  }
  return (
    <div className='search-wrap-1'>
                    <form action='#' onSubmit={submitHandler}>
                      <input placeholder='Search products…' type='text'  value={name}
                                onChange={(e) => setName(e.target.value)} id="name_field" className="form-control"/>
                      <button className='button-search'>
                        <i className='pe-7s-search'></i>
                      </button>
                    </form>
                  </div>
  )
}

export default Search