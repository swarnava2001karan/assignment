import "./Header.css"
function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="logo">🔹 MARVEL</div>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Page</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;