import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBoxOpen, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import AppIcon from '../../../common/AppIcon';
import BaseCard from '../BaseCard/BaseCard';
import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './ProductCard.styles';

export interface ProductCardProps {
  title: string;
  price: string;
  description?: string;
  image?: ImageSourcePropType;
  stockLabel?: string;
  icon?: IconProp;
  onPress?: () => void;
  onActionPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  image,
  stockLabel,
  icon = faBoxOpen,
  onPress,
  onActionPress,
  style,
}) => {
  const { colors } = useAppTheme();

  return (
    <BaseCard
      padding={8}
      radius={20}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: colors.surfaceSecondary },
          ]}
        >
          {image ? (
            <Image source={image} style={styles.image} resizeMode="cover" />
          ) : (
            <AppIcon icon={icon} size={32} color={colors.accent} />
          )}
        </View>

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text
              style={[styles.title, { color: colors.textPrimary }]}
              numberOfLines={1}
            >
              {title}
            </Text>

            {stockLabel ? (
              <View
                style={[
                  styles.stockBadge,
                  { backgroundColor: colors.successBackground },
                ]}
              >
                <Text style={[styles.stockText, { color: colors.success }]}>
                  {stockLabel}
                </Text>
              </View>
            ) : null}
          </View>

          {description ? (
            <Text
              style={[styles.description, { color: colors.textSecondary }]}
              numberOfLines={2}
            >
              {description}
            </Text>
          ) : null}

          <View style={styles.footer}>
            <Text style={[styles.price, { color: colors.accent }]}>
              {price}
            </Text>

            {onActionPress ? (
              <Pressable
                onPress={onActionPress}
                accessibilityRole="button"
                accessibilityLabel="Product action"
                style={[
                  styles.actionButton,
                  { backgroundColor: colors.accent },
                ]}
              >
                <AppIcon
                  icon={faShoppingCart}
                  color={colors.textInverse}
                  size={14}
                />
              </Pressable>
            ) : null}
          </View>
        </View>
      </View>
    </BaseCard>
  );
};

export default ProductCard;
