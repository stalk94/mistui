import daisyui from 'daisyui'; // если ты используешь плагины


export default {
	content: ['**/*.{js,ts,jsx,tsx,html}'],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 }
				},
				slideUp: {
					'0%': { transform: 'translateY(1rem)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 }
				},
				slideDown: {
					'0%': { transform: 'translateY(-1rem)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 }
				},
				shake: {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-5px)' },
					'75%': { transform: 'translateX(5px)' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				zoomIn: {
					'0%': { transform: 'scale(0)', opacity: 0 },
					'100%': { transform: 'scale(1)', opacity: 1 },
				},
				zoomOut: {
					'0%': { transform: 'scale(1)', opacity: 1 },
					'100%': { transform: 'scale(0)', opacity: 0 },
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.3s ease-out forwards',
				fadeOut: 'fadeOut 0.3s ease-out forwards',
				slideUp: 'slideUp 0.4s ease-out',
				slideDown: 'slideDown 0.4s ease-out',
				shake: 'shake 0.4s ease-in-out !important',
				wiggle: 'wiggle 0.5s ease-in-out infinite',
				zoomIn: 'zoomIn 0.3s ease-out',
				zoomOut: 'zoomOut 0.3s ease-out',
			},
		},
	},
	plugins: [daisyui],
};