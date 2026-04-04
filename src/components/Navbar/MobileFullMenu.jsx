import { useState } from 'react';

export function MobileFullMenu({ navItems, onClose }) {
  const [activeItem, setActiveItem] = useState(null);
  const [activeChild, setActiveChild] = useState(null);

  return (
    <nav className="flex-1">
      {navItems.map((item, idx) => (
        <div key={item.label} >
          <button
            className="w-full text-left py-5 flex items-center justify-between group"
            onClick={() => setActiveItem(activeItem === item.label ? null : item.label)}>
            <span
              className={`text-3xl font-semibold tracking-tight transition-colors duration-200
              ${activeItem === item.label ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
              {item.label} +
            </span>
            <span
              className={`text-white/60 text-2xl transition-transform duration-300
              ${activeItem === item.label ? 'rotate-45' : ''}`}></span>
          </button>

          {/* Children */}
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeItem === item.label ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
            {item.children.map(child => (
              <div key={child.label}>
                <button
                  className="w-full text-left py-2 px-4 flex items-center justify-between group/child"
                  onClick={() => {
                    if (child.children) {
                      setActiveChild(activeChild === child.label ? null : child.label);
                    } else {
                      onClose();
                    }
                  }}>
                  <span className="text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors duration-200 group-hover/child:text-white">
                    {child.label}
                  </span>
                  {child.children && (
                    <span
                      className={`text-white/40 text-sm transition-transform duration-300
                      ${activeChild === child.label ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  )}
                </button>

                {/* Grandchildren */}
                {child.children && (
                  <div
                    className={`overflow-hidden transition-all duration-300
                    ${activeChild === child.label ? 'max-h-96' : 'max-h-0'}`}>
                    {child.children.map(grand => (
                      <a
                        key={grand.label}
                        href={grand.href}
                        className="block py-1.5 pl-8 text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors duration-200"
                        onClick={onClose}>
                        — {grand.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
