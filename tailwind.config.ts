import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		typography: '({}) => ({\n        DEFAULT: {\n          css: [\n            {\n              "--tw-prose-body": "var(--text)",\n              "--tw-prose-headings": "var(--text)",\n              h1: {\n                fontWeight: "normal",\n                marginBottom: "0.2em",\n\n                fontSize: "2.5rem",\n              },\n              h2: {\n                marginBottom: "0.175em",\n\n                fontSize: "2rem",\n              },\n            },\n          ],\n        },\n        base: {\n          css: [\n            {\n              h1: {\n                fontSize: "3.5rem",\n                marginBottom: "0.2em",\n                lineHeight: "1.2",\n              },\n              h2: {\n                fontSize: "2.8rem",\n                marginBottom: "0.175em",\n                lineHeight: "1.2",\n              },\n            },\n          ],\n        },\n        md: {\n          css: [\n            {\n              h1: {\n                fontSize: "4.5rem",\n                whiteSpace: "wrap",\n                marginBottom: "0.2em",\n              },\n              h2: { fontSize: "3.75rem" },\n              h3: { fontSize: "3rem" },\n              h4: { fontSize: "2.5rem" },\n              h5: { fontSize: "2rem" },\n              h6: { fontSize: "1.5rem" },\n            },\n          ],\n        },\n      })',
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
