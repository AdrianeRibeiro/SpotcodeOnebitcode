import React, { Fragment} from 'react';
import NavbarFooter from '../../components/common/navbar_footer'
import SectionWrapper from '../../components/common/section_wrapper'
import Search from '../../components/search';
import { Heading } from 'react-bulma-components';

const SearchScreen = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Buscar</Heading>
        <Search/>
      </SectionWrapper>
      <NavbarFooter/>
    </Fragment>
  )
}

export default SearchScreen;