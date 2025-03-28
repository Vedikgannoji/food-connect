import { NavLink } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Youtube, Mail, PawPrint } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary font-bold text-xl">
              <PawPrint className="h-6 w-6 text-paws-green" />
              <span>Paws Project</span>
            </div>
            <p className="text-muted-foreground">
              Ensuring animal safety everywhere through education, action, and community engagement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/safety" className="text-muted-foreground hover:text-primary transition-colors">
                  Safety & Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/report" className="text-muted-foreground hover:text-primary transition-colors">
                  Report Cruelty
                </NavLink>
              </li>
              <li>
                <NavLink to="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">
                  Volunteer
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/stories" className="text-muted-foreground hover:text-primary transition-colors">
                  Rescue Stories
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact & Resources
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for updates on animal welfare initiatives and success stories.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Paws Project. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-destructive" /> for all animals
          </p>
        </div>
      </div>
    </footer>
  );
}
