import React from 'react'
import { getSession } from 'next-auth/react'

import Profile from '../../components/User/Profile'


const UpdateProfilePage = () => {
    return (
        <>
            <Profile />
        </>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }

}

export default UpdateProfilePage
