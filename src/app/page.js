import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="nav nav-bar">
        <h4>Proffile picture</h4>

        <ul className="nav_links">
          <li> search button</li>
          <li> Add button </li>
        </ul>
      </nav>

      <div>
        <h2> Search bar</h2>
      </div>
      <div>
        <h1>Welcome to Code Climber</h1>
        <h2>we help you to manage your works!!</h2>
      </div>
    </main>
  );
}
