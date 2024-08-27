import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // Możesz dodać więcej providerów tutaj
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      // Możesz dodać dowolną logikę tutaj, ale bez interakcji z bazą danych, 
      // na przykład sprawdzanie czy użytkownik ma odpowiedni email
      return true;  // Jeśli chcesz zezwolić na logowanie dla wszystkich użytkowników
    },
    async session({ session }) {
      // Możesz dodać dowolną logikę związaną z sesją
      return session; // Na przykład zwrócenie całej sesji
    },
  },
});

export { handler as GET, handler as POST };
