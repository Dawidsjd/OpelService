import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { sql } from '@vercel/postgres'; // Importujemy moduł do zapytań SQL

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      try {
        if (user?.email) {
          // Sprawdzamy, czy użytkownik istnieje w bazie danych
          const existingUser = await sql`
            SELECT * FROM Users WHERE email = ${user.email};
          `;

          if (existingUser.rows.length === 0) {
            // Jeśli użytkownik nie istnieje, dodajemy go do bazy danych
            await sql`
              INSERT INTO Users (email) VALUES (${user.email});
            `;
          }
        }
        return true;  // Pozwalamy na logowanie
      } catch (error) {
        console.error('Error during sign in:', error);
        return false; // W przypadku błędu blokujemy logowanie
      }
    },
    async session({ session }) {
      return session; // Zwracamy sesję
    },
  },
});

export { handler as GET, handler as POST };
