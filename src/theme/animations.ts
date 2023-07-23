const animations = {
  keyframes: {
    drawerOverlayShow: {
      from: { opacity: '0' },
      to: { opacity: '1' }
    },
    drawerContentShowRight: {
      from: { opacity: '0', transform: 'translateX(100%)' },
      to: { opacity: '1', transform: 'translateX(0)' }
    },
    drawerContentShowLeft: {
      from: { opacity: '0', transform: 'translateX(-100%)' },
      to: { opacity: '1', transform: 'translateX(0)' }
    },
    slideDown: {
      from: { height: 0 },
      to: { height: 'var(--radix-accordion-content-height)' }
    },
    slideUp: {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: 0 }
    }
  },
  animation: {
    drawerOverlayShow: 'drawerOverlayShow 0.3s ease-in-out forwards',
    drawerContentShowRight: 'drawerContentShowRight 0.3s ease-in-out forwards',
    drawerContentShowLeft: 'drawerContentShowLeft 0.3s ease-in-out forwards',
    slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
  }
};

export default animations;
