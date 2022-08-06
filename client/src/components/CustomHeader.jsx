import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, Icon, IconButton, Text } from '@chakra-ui/react';

// icons
import { IoIosArrowBack } from 'react-icons/io';

const CustomHeader = ({ headerTitle }) => {
  const navigate = useNavigate();

  return (
    <HStack
      px={{ base: '25px', md: '50px', xl: '75px' }}
      py={{ base: '50px' }}
      justify='start'
      align='center'
      spacing={6}
    >
      <IconButton
        icon={<Icon as={IoIosArrowBack} boxSize='20px' />}
        title='Go Back'
        onClick={() => navigate(-1)}
      />
      {headerTitle && (
        <Text fontSize='lg' fontWeight='bold'>
          {headerTitle}
        </Text>
      )}
    </HStack>
  );
};

export default CustomHeader;
