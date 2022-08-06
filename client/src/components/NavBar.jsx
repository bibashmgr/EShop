import React from 'react';
import { Flex, HStack, Icon, IconButton, Text } from '@chakra-ui/react';

// icons
import { BsCartFill } from 'react-icons/bs';
import { RiUser3Fill } from 'react-icons/ri';

const NavBar = () => {
  return (
    <Flex
      w='100%'
      h='10vh'
      justify='space-between'
      align='center'
      boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;'
      px={{ base: '25px', md: '50px', xl: '75px' }}
    >
      <Text fontSize='2xl' fontWeight='bold'>
        EShop
      </Text>
      <HStack align='center' spacing='4'>
        <IconButton
          icon={<Icon as={BsCartFill} boxSize='20px' />}
          title='Cart'
        />
        <IconButton
          icon={<Icon as={RiUser3Fill} boxSize='20px' />}
          title='Profile'
        />
      </HStack>
    </Flex>
  );
};

export default NavBar;
