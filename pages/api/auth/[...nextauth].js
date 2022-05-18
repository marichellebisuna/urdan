import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import User from '../../../backend/models/userModel'
import dbConnect from '../../../config/dbConnect'
// import Providers from "next-auth/providers"

export default NextAuth({
   
    session: {
        strategy:"jwt"
         //jwt: true
    },   
    providers: [
        CredentialsProvider({           
            async authorize(credentials) {
                dbConnect();

                const { email, password } = credentials;

                // Check if email and password is entered
                if (!email || !password) {
                    throw new Error('Please enter email or password');
                }

                // Find user in the database
                const user = await User.findOne({ email }).select('+password')
               
                if (!user) {
                    throw new Error('Invalid Email or Password')
                }

                // Check if password is correct or not
                const isPasswordMatched = await user.comparePassword(password);

                if (!isPasswordMatched) {
                    throw new Error('Invalid Email or Password')
                }

                return Promise.resolve(user)
            }
        }),
        // OAuth authentication providers
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        jwt: async ({token, user}) => {
           
            user && (token.user = user)
            return Promise.resolve(token)
        },
        session: async ({session, token}) => {

            session.user = token.user
            return Promise.resolve(session)
        }   
    },
    pages: {
        signIn: '/login',       
      }
})