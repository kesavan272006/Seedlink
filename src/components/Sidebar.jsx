import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Landing' },
  { to: '/discovery', label: 'Discovery' },
  { to: '/shopkeeper-dashboard', label: 'Shopkeeper Dashboard' },
  { to: '/admagnet-demo', label: 'AdMagnet AI' },
  { to: '/about', label: 'About' },
  { to: '/features', label: 'Features' },
  { to: '/contact', label: 'Contact' },
  { to: '/auth', label: 'Sign In/Up' },
];

const Sidebar = () => (
  <aside className="fixed top-0 left-0 h-full w-56 bg-deep-navy shadow-lg flex flex-col z-40 animate-slide-up">
    <div className="text-gold-primary text-2xl font-extrabold py-6 px-4 border-b border-gold-primary">VisioBiz <span className="text-gold-light">AI</span></div>
    <nav className="flex-1 flex flex-col gap-2 py-4 px-2">
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `block py-2 px-4 rounded-lg font-semibold transition-all duration-200 ${isActive ? 'bg-gold-primary text-bg-primary' : 'text-gold-primary hover:bg-gold-light hover:text-bg-primary'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
