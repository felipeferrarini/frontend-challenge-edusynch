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
    }
  },
  animation: {
    drawerOverlayShow: 'drawerOverlayShow 0.3s ease-in-out forwards',
    drawerContentShowRight: 'drawerContentShowRight 0.3s ease-in-out forwards',
    drawerContentShowLeft: 'drawerContentShowLeft 0.3s ease-in-out forwards'
  }
};

export default animations;
