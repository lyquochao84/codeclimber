import { ModalProvider } from "@/context/ModalContext";
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
          <ModalProvider>
            <Navigation />
            <main className={styles.content}>{children}</main>
          </ModalProvider>
        </div>
      </body>
    </html>
  );
}
