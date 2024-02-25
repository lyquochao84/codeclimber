import "./globals.css";

export const metadata = {
  title: "Code Climber",
  description: "Solution for all programmers!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
