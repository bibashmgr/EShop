import React from 'react';
import { Flex, HStack, Icon, IconButton, Image, Text } from '@chakra-ui/react';

// icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartProductCard = ({ product }) => {
  return (
    <Flex
      px='4'
      py='4'
      boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;'
      borderRadius='5px'
      cursor='pointer'
    >
      <HStack justify='start' align='start' h='100px' w='100%'>
        <Image src='/images/default.png' w='100px' />
        <Flex direction='column' justify='space-between' h='100%' w='100%'>
          <Flex pt='1'>
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='bold'>
              {product.name}
            </Text>
          </Flex>
          <Flex justify='space-between' align='end'>
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
              {product.priceUnit + product.priceAmount}
            </Text>
            <HStack>
              <IconButton
                variant='solid'
                size={{ base: 'sm' }}
                title='Minus'
                icon={<Icon as={AiOutlineMinus} boxSize={{ base: '15px' }} />}
                onClick={() => console.log('-')}
              />
              <Text fontWeight='bold'>
                {product.quantity < 10
                  ? '0' + product.quantity
                  : product.quantity}
              </Text>
              <IconButton
                variant='solid'
                size={{ base: 'sm' }}
                title='Plus'
                icon={<Icon as={AiOutlinePlus} boxSize={{ base: '15px' }} />}
                onClick={() => console.log('+')}
              />
            </HStack>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default CartProductCard;
