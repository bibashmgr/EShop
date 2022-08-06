import React from 'react';

import { HStack, Icon, IconButton, Input } from '@chakra-ui/react';

// icons
import { HiOutlineSearch } from 'react-icons/hi';
import { MdFilterList } from 'react-icons/md';

const SearchBar = () => {
  return (
    <HStack
      px={{ base: '25px', md: '50px', xl: '75px' }}
      py={{ base: '50px' }}
      justify='start'
      align='center'
    >
      <Input
        type='text'
        name='search'
        placeholder='Search Product'
        w={{ base: '100%', sm: '300px' }}
      />
      <IconButton
        icon={<Icon as={HiOutlineSearch} boxSize='20px' />}
        title='Search'
      />
      <IconButton
        icon={<Icon as={MdFilterList} boxSize='20px' />}
        title='Filter'
      />
    </HStack>
  );
};

export default SearchBar;
