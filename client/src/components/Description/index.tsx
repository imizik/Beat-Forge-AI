import {Button, Heading, Text} from '@chakra-ui/react'
import './MainBox.css'

export default function MainBox() {
    return (
        <>
            <Heading as='h1' size='4xl' color="text.primary">
                Beat Forge
            </Heading>
            <br/>
            <Heading as='h2' size='xl'  color="text.secondary">
                DESCRIPTION TITLE
            </Heading>
            <Text>
                Blah blah blah blah
            </Text>
            <Button color="button.main">sdbsdb</Button>
        </>

    )
}