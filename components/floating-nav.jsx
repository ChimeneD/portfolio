import React from 'react';
import { GoHome } from 'react-icons/go';
import { VscFolderLibrary } from 'react-icons/vsc';
import { RiMessage2Line, RiUserLine } from 'react-icons/ri';
import { IoBrushOutline } from 'react-icons/io5';

const FloatingNav = () => {
  return (
    <div>
      <a href='#'>
        <GoHome />
      </a>
      <a href='#about'>
        <RiUserLine />
      </a>
      <a href='#skill'>
        <IoBrushOutline />
      </a>
      <a href='#portfolio'>
        <VscFolderLibrary />
      </a>
      <a href='#contact'>
        <RiMessage2Line />
      </a>
    </div>
  );
};

export default FloatingNav;
