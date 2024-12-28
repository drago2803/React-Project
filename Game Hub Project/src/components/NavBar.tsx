import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/img/logo.webp';
import { ColorModeSwitch, SearchInput } from './index.ts';

interface Prop {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Prop) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      {/* Компонент SearchInput для ввода и выполнения поисковых запросов */}
      <SearchInput onSearch={onSearch} />
      {/* Компонент ColorModeSwitch для переключения темы приложения */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;