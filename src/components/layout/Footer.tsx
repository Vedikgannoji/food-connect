import { NavLink } from 'react-router-dom';
import { Heart, Mail, Utensils } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary font-bold text-xl">
              <Utensils className="h-6 w-6 text-paws-green" />
              <span className="text-black dark:text-white">Food Connect</span>
            </div>
            <p className="text-muted-foreground">
              Bridging hunger and saving food through community engagement and real-time food distribution.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>foodconnect@gmail.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-paws-green transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/features" className="text-muted-foreground hover:text-paws-green transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/join-donor" className="text-muted-foreground hover:text-paws-green transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Join as Donor
                </NavLink>
              </li>
              <li>
                <NavLink to="/join-ngo" className="text-muted-foreground hover:text-paws-green transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Join as NGO
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-paws-green transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service" className="text-muted-foreground hover:text-paws-green transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Every day, we work to ensure that surplus food reaches those who need it most, creating a world with less waste and more compassion.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Food Connect. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-destructive" /> to end food waste
          </p>
        </div>
      </div>
    </footer>
  );
}
