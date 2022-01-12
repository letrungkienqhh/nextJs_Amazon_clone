import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
require('dotenv').config()
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        clientId: "166265886822-jg8g99ivg10f9oco4eq4f60r6op02brq.apps.googleusercontent.com",
        clientSecret: "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"
      })
    // ...add more providers here
  ],
})