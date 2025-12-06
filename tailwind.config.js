/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,html}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-teal': '#00C9B7',
        'logo-blue': '#0065C3',
        'primary': {
          DEFAULT: '#008FBD',
          dark: '#005A8C',
          light: '#33D4C5',
        },
        'accent': {
          DEFAULT: '#FF8C42',
          secondary: '#FFA666',
          warm: '#FF6B6B',
        },
        'success': '#00C9B7',
        'bg': {
          primary: '#FFFFFF',
          secondary: '#F0F7FA',
          tertiary: '#E1EFF5',
        },
        'text': {
          primary: '#0F172A',
          secondary: '#334155',
          muted: '#64748B',
        },
        'card': {
          bg: '#FFFFFF',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif'],
        'body': ['Mulish', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #E0F7FA 0%, #E1F5FE 50%, #E3F2FD 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00C9B7 0%, #0095C8 50%, #0065C3 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FF8C42 0%, #FF6B6B 100%)',
        'logo-gradient': 'linear-gradient(180deg, #00C9B7 0%, #0065C3 100%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 201, 183, 0.2)',
        'glow-strong': '0 0 50px rgba(0, 101, 195, 0.25)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 30px rgba(0, 0, 0, 0.12)',
        'xl': '0 20px 50px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
        '2xl': '8rem',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
        'patternMove': 'patternMove 40s ease-in-out infinite',
        'patternOverlay': 'patternOverlay 50s ease-in-out infinite',
        'float': 'float 25s ease-in-out infinite',
        'gridMove': 'gridMove 20s linear infinite',
        'shine': 'shine 3s infinite',
        'underlineExpand': 'underlineExpand 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        patternMove: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-30px, -30px) scale(1.08) rotate(2deg)' },
          '66%': { transform: 'translate(30px, 30px) scale(0.95) rotate(-2deg)' },
        },
        patternOverlay: {
          '0%, 100%': { opacity: '1', transform: 'translate(0, 0)' },
          '50%': { opacity: '0.7', transform: 'translate(20px, -20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(40px, -40px) scale(1.15) rotate(5deg)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9) rotate(-5deg)' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
        underlineExpand: {
          'to': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}

