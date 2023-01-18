import { Flex, Spacer, Grid, GridItem } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <div style={{width: "100%", paddingTop: "1%", paddingLeft: "1%"}}>
            <nav >
                <Flex>
                    <span style={{marginRight: "5%"}}>PROJECT FIT</span>
                    
                    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                        <GridItem w='100%'>How it works</GridItem>
                        <GridItem w='100%'>Try it out</GridItem>
                        <GridItem w='100%'>User</GridItem>
                    </Grid>

                </Flex>
            
            </nav>
        </div>
    )
}