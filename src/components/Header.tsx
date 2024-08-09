// src/components/Header.tsx
import { Link } from 'react-router-dom';
import { Button } from './ui/button'; // Assuming you have a Button component
import { ModeToggle } from './ModeToggle';

// Import icons from Heroicons

const Header = () => {

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="flex items-center space-x-2">
            <span>MyApp</span>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className="flex items-center space-x-1 hover:text-gray-300">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center space-x-1 hover:text-gray-300">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center space-x-1 hover:text-gray-300">
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/features" className="flex items-center space-x-1 hover:text-gray-300">
                <span>Features</span>
              </Link>
            </li>
              <li>
              </li>
              <ModeToggle />
                <li>
                  <Link to="/login">
                    <Button variant="default" className="ml-4 flex items-center space-x-2">
                      <span>Login</span>
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <Button variant="default" className="ml-4 flex items-center space-x-2">
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
