import { Stack, Box, Heading, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

export default function StackEx() {
  return (
    <Stack spacing={8} direction='row' justify='center'>
      <Feature
        title={<Link href='https://www.who.int/' isExternal>
          World Health Organization
        </Link>}
        desc='Check the latest information'
      />
      <Feature
        title={<Link href='https://rapidapi.com/' isExternal>
          Rapid API
        </Link>}
        desc='API used for the website'
      />
    </Stack>
  )
}