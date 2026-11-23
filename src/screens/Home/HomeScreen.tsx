import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppIcon from '../../components/common/AppIcon';
import CategoryCard from '../../components/common/CategoryCard/CategoryCard';
import { componentCategories } from '../../constants/componentData';
import { useAppTheme } from '../../theme/ThemeContext';
import { styles } from './HomeScreen.styles';

import { UIStackParamList } from '../../navigation/types';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';

type HomeScreenProps = NativeStackScreenProps<UIStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { colors, isDark } = useAppTheme();
  const [search, setSearch] = useState('');

  const filteredCategories = componentCategories.filter(category =>
    category.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleCategoryPress = (categoryId: string) => {
    switch (categoryId) {
      case 'buttons':
        navigation.navigate('Buttons');
        break;
      case 'cards':
        navigation.navigate('Cards');
        break;
      case 'badges':
        navigation.navigate('Badges');
        break;
      default:
        console.log(`Navigation for ${categoryId} is not implemented yet.`);
    }
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: colors.textSecondary }]}>
              WELCOME TO
            </Text>

            <Text style={[styles.appTitle, { color: colors.textPrimary }]}>
              RN UI Playground
            </Text>
          </View>

          <Pressable
            onPress={() =>
              navigation.getParent()?.getParent()?.navigate('MainTabs')
            }
            style={[
              styles.themeButton,
              { backgroundColor: colors.accentLight },
            ]}
          >
            <AppIcon
              icon={isDark ? faSun : faMoon}
              color={colors.accent}
              size={19}
            />
          </Pressable>
        </View>

        {/* Hero section */}
        <View
          style={[styles.heroCard, { backgroundColor: colors.accentLight }]}
        >
          <Text style={[styles.heroLabel, { color: colors.accentStrong }]}>
            YOUR COMPONENT LIBRARY
          </Text>

          <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>
            Create beautiful{'\n'}interfaces faster.
          </Text>

          <Text
            style={[styles.heroDescription, { color: colors.textSecondary }]}
          >
            Explore reusable React Native components, experiment with styles and
            build better UI.
          </Text>

          <Pressable
            onPress={() => handleCategoryPress('buttons')}
            style={[styles.exploreButton, { backgroundColor: colors.accent }]}
          >
            <Text style={[styles.exploreText, { color: colors.textInverse }]}>
              Explore components
            </Text>

            <AppIcon icon={faArrowRight} color={colors.textInverse} size={14} />
          </Pressable>
        </View>

        {/* Search */}
        <View
          style={[
            styles.searchContainer,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <AppIcon
            icon={faMagnifyingGlass}
            color={colors.textSecondary}
            size={17}
          />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search components..."
            placeholderTextColor={colors.textSecondary}
            style={[styles.searchInput, { color: colors.textPrimary }]}
          />
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              Explore components
            </Text>

            <Text
              style={[styles.sectionSubtitle, { color: colors.textSecondary }]}
            >
              Everything you need to build your UI
            </Text>
          </View>

          <AppIcon icon={faLayerGroup} color={colors.accent} size={20} />
        </View>

        {/* Category cards */}
        <View style={styles.categoryGrid}>
          {filteredCategories.map(category => (
            <View key={category.id} style={styles.categoryItem}>
              <CategoryCard
                title={category.title}
                description={category.description}
                icon={category.icon}
                componentCount={category.componentCount}
                onPress={() => handleCategoryPress(category.id)}
              />
            </View>
          ))}
        </View>

        {filteredCategories.length === 0 && (
          <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
            No components found.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
