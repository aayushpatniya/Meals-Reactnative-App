import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import Colors from '../constants/colors';

const customHeaderButton = props => {
  return (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS === 'android' ? 'white' : Colors.primary}></HeaderButton>
  );
};

export default customHeaderButton;