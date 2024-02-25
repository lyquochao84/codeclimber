import { ModalProvider } from "@/context/ModalContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import styles from './layout.module.css';
import Navigation from "@/components/navigation/navigation";

export const metadata = {
  title: "Code Climber",
  description: "Solution for all programmers!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrap}>
          <ThemeProvider>
            <ModalProvider>
              <Navigation />
              <main className={styles.content}>{children}</main>
            </ModalProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
