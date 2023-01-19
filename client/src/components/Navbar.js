import { Flex, Grid, GridItem, Center } from '@chakra-ui/react'
import './Navbar.scss'
export default function Navbar() {
    return (
        <Center className='nav-ctn'>
            <nav className='navbar'>
                <Flex justify={"space-between"}>
                    <span>PROJECT FIT</span>

                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                        <GridItem w='100%'>How it works</GridItem>
                        <GridItem w='100%'>Try it out</GridItem>
                        <GridItem w='100%'>User</GridItem>
                    </Grid>

                </Flex>

            </nav>
        </Center>
    )
}