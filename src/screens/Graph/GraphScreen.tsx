import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useAppTheme } from '../../theme/ThemeContext';
import { GraphStackParamList } from '../../navigation/types';
import { styles } from './GraphScreen.styles';

type Props = NativeStackScreenProps<GraphStackParamList, 'GraphHome'>;

const graphCategories = [
  {
    id: 'progress',
    title: 'Progress Bar',
    description: 'Progress indicators and completion status',
    count: '19 Examples',
    icon: faChartLine,
    route: 'ProgressBar' as const,
  },
];

const GraphScreen: React.FC<Props> = ({ navigation }) => {
  const { colors } = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.heading, { color: colors.textPrimary }]}>
            Graphs
          </Text>

          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Visualize data with reusable graph components.
          </Text>
        </View>

        {/* Section Heading */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Explore graphs
          </Text>

          <Text
            style={[styles.sectionDescription, { color: colors.textSecondary }]}
          >
            Everything you need to visualize your data
          </Text>
        </View>

        {/* Graph Cards */}
        <View style={styles.cardGrid}>
          {graphCategories.map(item => (
            <Pressable
              key={item.id}
              onPress={() => navigation.navigate(item.route)}
              style={[
                styles.categoryCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: colors.surfaceSecondary },
                ]}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size={24}
                  color={colors.accent}
                />
              </View>

              <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
                {item.title}
              </Text>

              <Text
                style={[
                  styles.cardDescription,
                  { color: colors.textSecondary },
                ]}
              >
                {item.description}
              </Text>

              <View style={styles.cardFooter}>
                <Text style={[styles.cardCount, { color: colors.accent }]}>
                  {item.count}
                </Text>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  size={20}
                  color={colors.accent}
                />
              </View>
            </Pressable>
          ))}
        </View>

        <Text style={[styles.footer, { color: colors.textSecondary }]}>
          RN UI Playground · Graph Components
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GraphScreen;
