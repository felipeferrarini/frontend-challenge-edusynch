const animations = {
  keyframes: {
    drawerOverlayShow: {
      from: { opacity: '0' },
      to: { opacity: '0.9' }
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
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' }
    },
    slideUp: {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' }
    },
    overlayShow: {
      from: { opacity: '0' },
      to: { opacity: '0.9' }
    },
    contentShow: {
      from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
      to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
    }
  },
  animation: {
    drawerOverlayShow: 'drawerOverlayShow 0.3s ease-in-out forwards',
    drawerContentShowRight: 'drawerContentShowRight 0.3s ease-in-out forwards',
    drawerContentShowLeft: 'drawerContentShowLeft 0.3s ease-in-out forwards',
    slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
  }
};

export default animations;
