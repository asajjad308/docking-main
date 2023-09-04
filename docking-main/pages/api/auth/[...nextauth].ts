import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: "tothemarsandbeyond",
   
},
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        // Your form fields (e.g., email and password) should go here
        // email: { label: 'Email', type: 'email', placeholder: 'example@email.com' },
        // password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        const { username, password } = credentials as { username: string, password: string };
     
        console.log('hello')
        // Make a POST request to your authentication endpoint with credentials
        const response = await fetch("https://localhost:7064/api/Users/AuthenticateUser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        
          body: JSON.stringify({
            userName: username,
            password: password,
          }),
        });

        console.log(response)
        if (response.ok) {
          // Authentication succeeded; parse and return the user data
          const user = await response.json();
          alert(response)
          return user;
        } else {
          // Authentication failed; return null
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
    // error: '/error',
    // signOut: '/signout'
  }
};

export default NextAuth(authOptions);
