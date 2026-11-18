import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import AppIcon from '../AppIcon';
import { useAppTheme } from '../../../theme/ThemeContext';
import { styles } from './CategoryCard.styles';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: IconProp;
  componentCount: number;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  componentCount,
  onPress,
}) => {
  const { colors } = useAppTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <View
        style={[styles.iconContainer, { backgroundColor: colors.accentLight }]}
      >
        <AppIcon icon={icon} size={22} color={colors.accent} />
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          {title}
        </Text>

        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {description}
        </Text>

        <View style={styles.footer}>
          <Text style={[styles.count, { color: colors.accent }]}>
            {componentCount} Components
          </Text>

          <AppIcon
            icon={require('@fortawesome/free-solid-svg-icons').faArrowRight}
            size={14}
            color={colors.accent}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
