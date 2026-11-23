import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppIcon from '../../../components/common/AppIcon';

import { GraphStackParamList } from '../../../navigation/types';
import { useAppTheme } from '../../../theme/ThemeContext';
import { styles } from './ProgressBarScreen.styles';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import ProgressBar from '../../../components/graph-components/progress/ProgressBar/ProgressBar';

type ProgressBarScreenProps = NativeStackScreenProps<
  GraphStackParamList,
  'ProgressBar'
>;

const ProgressBarScreen: React.FC<ProgressBarScreenProps> = ({
  navigation,
}) => {
  const { colors } = useAppTheme();

  const SectionTitle = ({
    title,
    description,
  }: {
    title: string;
    description?: string;
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
        {title}
      </Text>

      {description ? (
        <Text
          style={[styles.sectionDescription, { color: colors.textSecondary }]}
        >
          {description}
        </Text>
      ) : null}
    </View>
  );

  const PreviewCard = ({ children }: { children: React.ReactNode }) => (
    <View
      style={[
        styles.previewCard,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      {children}
    </View>
  );

  const ProgressItem = ({
    title,
    percent,
    color,
  }: {
    title: string;
    percent: number;
    color?: string;
  }) => (
    <View style={styles.progressItem}>
      <View style={styles.progressHeader}>
        <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
          {title}
        </Text>

        <Text style={[styles.progressValue, { color: colors.textSecondary }]}>
          {percent}%
        </Text>
      </View>

      <ProgressBar percent={percent} showPercent={false} color={color} />
    </View>
  );

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
          <Pressable
            onPress={() => navigation.goBack()}
            style={[styles.backButton, { backgroundColor: colors.accentLight }]}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <AppIcon icon={faArrowLeft} color={colors.accent} size={18} />
          </Pressable>

          <View style={styles.headerContent}>
            <Text style={[styles.heading, { color: colors.textPrimary }]}>
              Progress Bar
            </Text>

            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Explore progress styles, sizes, colors and customization options.
            </Text>
          </View>
        </View>

        {/* 1. Progress Overview */}
        <SectionTitle
          title="Progress Overview"
          description="Track completion across different activities."
        />

        <PreviewCard>
          <ProgressItem title="Project Completion" percent={75} />
          <ProgressItem title="Tasks Completed" percent={60} />
          <ProgressItem title="Monthly Target" percent={90} />
          <ProgressItem title="Learning Progress" percent={40} />
        </PreviewCard>

        {/* 2. Sizes */}
        <SectionTitle
          title="Progress Bar Sizes"
          description="Thin and thick progress indicators."
        />

        <PreviewCard>
          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Thin Progress Bar
            </Text>
            <ProgressBar percent={35} size="thin" />
          </View>

          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Thick Progress Bar
            </Text>
            <ProgressBar percent={65} size="thick" />
          </View>
        </PreviewCard>

        {/* 3. Label Positions */}
        <SectionTitle
          title="Percentage Labels"
          description="Display percentage labels in different positions."
        />

        <PreviewCard>
          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Label at Top
            </Text>
            <ProgressBar percent={45} labelPosition="top" />
          </View>

          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Label at Middle
            </Text>
            <ProgressBar percent={70} size="thick" labelPosition="middle" />
          </View>

          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Label at Bottom
            </Text>
            <ProgressBar percent={85} labelPosition="bottom" />
          </View>
        </PreviewCard>

        {/* 4. Colors */}
        <SectionTitle
          title="Progress Colors"
          description="Use different colors to represent progress states."
        />

        <PreviewCard>
          <ProgressItem title="Accent" percent={75} color={colors.accent} />
          <ProgressItem title="Success" percent={90} color={colors.success} />
          <ProgressItem title="Warning" percent={55} color={colors.warning} />
          <ProgressItem title="Error" percent={30} color={colors.error} />
        </PreviewCard>

        {/* 5. Custom Styles */}
        <SectionTitle
          title="Custom Progress Bars"
          description="Customize height, corners and track appearance."
        />

        <PreviewCard>
          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Striped Track
            </Text>
            <ProgressBar percent={60} size="thick" stripedTrack />
          </View>

          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Square Corners
            </Text>
            <ProgressBar percent={50} height={10} rounded={false} />
          </View>

          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Custom Height
            </Text>
            <ProgressBar percent={80} height={16} color={colors.accentStrong} />
          </View>

          <View style={styles.progressItem}>
            <Text style={[styles.progressTitle, { color: colors.textPrimary }]}>
              Without Percentage
            </Text>
            <ProgressBar percent={95} showPercent={false} />
          </View>
        </PreviewCard>

        {/* 6. Custom Labels */}
        <SectionTitle
          title="Custom Labels"
          description="Display meaningful text instead of percentages."
        />

        <PreviewCard>
          <ProgressBar percent={75} label="75% completed" labelPosition="top" />

          <ProgressBar
            percent={40}
            label="40% uploaded"
            labelPosition="top"
            color={colors.success}
          />
        </PreviewCard>

        {/* Footer */}
        <Text style={[styles.footer, { color: colors.textSecondary }]}>
          RN UI Playground · Progress Bar Components
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProgressBarScreen;
