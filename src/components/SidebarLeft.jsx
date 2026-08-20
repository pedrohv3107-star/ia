// src/components/SidebarLeft.jsx
import React from 'react';
import { Bot, LayoutGrid, Trophy, BarChart2, Users, Settings } from 'lucide-react';

const navItems = [
  { icon: <Bot size={18} />, active: true },
  { icon: <LayoutGrid size={18} /> },
  { icon: <Trophy size={18} /> },
  { icon: <BarChart2 size={18} /> },
  { icon: <Users size={18} /> },
];

export default function SidebarLeft() {
  return (
    <aside className="sidebar-left">
      {navItems.map((item, i) => (
        <button key={i} className={`sidebar-icon ${item.active ? 'active' : ''}`}>
          {item.active && <span className="active-bar" />}
          {item.icon}
        </button>
      ))}
      <div style={{ marginTop: 'auto' }}>
        <button className="sidebar-icon">
          <Settings size={18} />
        </button>
      </div>
    </aside>
  );
}
