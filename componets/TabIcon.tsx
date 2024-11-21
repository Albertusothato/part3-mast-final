import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type TabIconProps = {
  name: string;
  focused: boolean;
  color: string;
  size: number;
};

const TabIcon: React.FC<TabIconProps> = ({ name, focused, color, size }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default TabIcon;
