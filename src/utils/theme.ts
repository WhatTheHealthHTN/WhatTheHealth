import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		body: `'Poppins', sans-serif`
	},
	components: {
		Checkbox: {
			baseStyle: {
				control: {
					height: '40px',
					width: '40px',
					borderRadius: '10px'
				},
			}
		},
		Progress: {
			baseStyle: {
				filledTrack: {
					bg: 'rgb(110,113,241)'
				}
			}
		}
	}
})

export default theme