import { Box, Heading,} from '@chakra-ui/react'
import './MainBox.css'

export default function MainBox() {
    return (
        <Box width="90%" pl="6rem">
            <Heading as='h1' size='4xl' color="text.primary" textAlign="center">
            The Anvil for <br/>Auditory Artistry
            </Heading>
            <br/>
            {/* <Heading as='h2' size='md'  color="text.secondary" textAlign="left">
            Discover Beat Forge, a unique AI that revolutionizes music production by enabling personalized beat creation. With its advanced capabilities, Beat Forge allows for a seamless interaction with musical elements, affording the freedom to craft unique beats, adjust parameters intuitively, and explore the infinite realm of music generation.
            </Heading> */}

        </Box>

    )
}