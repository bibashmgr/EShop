import React from 'react';
import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

// icons
import { AiFillHeart, AiOutlinePlus } from 'react-icons/ai';

const ProductCard = () => {
  return (
    <VStack
      minW='125px'
      spacing={2}
      px='4'
      py='4'
      boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;'
      borderRadius='10px'
    >
      <Image src='/images/default.png' boxSize='100%' />
      <HStack justify='start' align='start'>
        <VStack align='start' justify='start' spacing={0}>
          <Text fontSize='md' fontWeight='bold'>
            Iphone 13
          </Text>
          <Text fontSize='xs' fontWeight='semibold' color='gray.500'>
            Lorem ipsum dolor, sit amet ascasc asc asc
          </Text>
        </VStack>
        <IconButton
          variant='outline'
          size='xs'
          icon={<Icon as={AiFillHeart} color='gray.500' />}
        />
      </HStack>
      <Flex justify='space-between' align='center' w='full'>
        <Text fontSize='md' fontWeight='bold'>
          NRs. 134000
        </Text>
        <IconButton
          variant='solid'
          colorScheme='teal'
          size='sm'
          icon={<Icon as={AiOutlinePlus} boxSize='20px' />}
        />
      </Flex>
    </VStack>
  );
};

export default ProductCard;
