import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useAppTheme } from '../../theme/ThemeContext';

interface AppIconProps {
  icon: IconProp;
  size?: number;
  color?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ icon, size = 20, color }) => {
  const { colors } = useAppTheme();

  return (
    <FontAwesomeIcon icon={icon} size={size} color={color ?? colors.icon} />
  );
};

export default AppIcon;
