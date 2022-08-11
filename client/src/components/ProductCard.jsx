import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <VStack
      minW='125px'
      spacing={2}
      px='4'
      py='4'
      boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;'
      borderRadius='10px'
      cursor='pointer'
    >
      <Image
        src='/images/default.png'
        boxSize='100%'
        onClick={() => navigate('/product')}
      />
      <VStack align='start' justify='start' spacing={0}>
        <Text fontSize='md' fontWeight='bold'>
          {product.name}
        </Text>
        <Text fontSize='xs' fontWeight='semibold' color='gray.500'>
          {product.desc}
        </Text>
      </VStack>
      <Flex justify='space-between' align='center' w='full'>
        <Text fontSize='lg' fontWeight='bold'>
          ${product.price}
        </Text>
        <HStack>
          <IconButton
            variant='solid'
            size={{ base: 'xs', sm: 'sm' }}
            title='Like'
            icon={
              <Icon
                as={AiFillHeart}
                color='gray.500'
                boxSize={{ base: '12px', sm: '15px' }}
              />
            }
            onClick={() => console.log('Like')}
          />
          <IconButton
            variant='solid'
            size={{ base: 'xs', sm: 'sm' }}
            title='Add'
            icon={
              <Icon as={AiOutlinePlus} boxSize={{ base: '12px', sm: '15px' }} />
            }
            onClick={() => console.log('Add to Cart')}
          />
        </HStack>
      </Flex>
    </VStack>
  );
};

export default ProductCard;
