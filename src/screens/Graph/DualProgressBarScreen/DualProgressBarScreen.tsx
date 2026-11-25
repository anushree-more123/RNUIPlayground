import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

import AppIcon from '../../../components/common/AppIcon';

import { GraphStackParamList } from '../../../navigation/types';
import { useAppTheme } from '../../../theme/ThemeContext';
import { styles } from './DualProgressBarScreen.styles';
import DualProgressBar from '../../../components/graph-components/progress/DualProgressBar/DualProgressBar';

type DualProgressBarScreenProps = NativeStackScreenProps<
  GraphStackParamList,
  'DualProgressBar'
>;

const DualProgressBarScreen: React.FC<DualProgressBarScreenProps> = ({
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

  const ExampleItem = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <View style={styles.exampleItem}>
      <Text style={[styles.exampleTitle, { color: colors.textPrimary }]}>
        {title}
      </Text>
      {children}
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
              Dual Progress Bar
            </Text>

            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Display two progress values together in a single progress track.
            </Text>
          </View>
        </View>

        {/* 1. Basic Examples */}
        <SectionTitle
          title="Basic Dual Progress"
          description="Display two progress segments with their remaining track."
        />

        <PreviewCard>
          <ExampleItem title="Completed and In Progress">
            <DualProgressBar
              percent1={45}
              percent2={30}
              label1="Completed"
              label2="In Progress"
            />
          </ExampleItem>

          <ExampleItem title="Completed and Pending">
            <DualProgressBar
              percent1={60}
              percent2={25}
              label1="Completed"
              label2="Pending"
            />
          </ExampleItem>

          <ExampleItem title="Equal Progress">
            <DualProgressBar
              percent1={40}
              percent2={40}
              label1="Development"
              label2="Testing"
            />
          </ExampleItem>
        </PreviewCard>

        {/* 2. Sizes */}
        <SectionTitle
          title="Progress Bar Sizes"
          description="Choose between thin and thick progress tracks."
        />

        <PreviewCard>
          <ExampleItem title="Thin Progress Bar">
            <DualProgressBar percent1={45} percent2={30} size="thin" />
          </ExampleItem>

          <ExampleItem title="Thick Progress Bar">
            <DualProgressBar percent1={45} percent2={30} size="thick" />
          </ExampleItem>

          <ExampleItem title="Custom Height">
            <DualProgressBar percent1={50} percent2={30} height={16} />
          </ExampleItem>
        </PreviewCard>

        {/* 3. Labels */}
        <SectionTitle
          title="Progress Labels"
          description="Customize labels and percentage visibility."
        />

        <PreviewCard>
          <ExampleItem title="Custom Labels">
            <DualProgressBar
              percent1={55}
              percent2={25}
              label1="Successful"
              label2="Failed"
            />
          </ExampleItem>

          <ExampleItem title="Without Labels">
            <DualProgressBar percent1={70} percent2={20} showLabels={false} />
          </ExampleItem>

          <ExampleItem title="Longer Labels">
            <DualProgressBar
              percent1={65}
              percent2={20}
              label1="Tasks Completed"
              label2="Tasks Remaining"
            />
          </ExampleItem>
        </PreviewCard>

        {/* 4. Colors */}
        <SectionTitle
          title="Progress Colors"
          description="Use different colors for each progress segment."
        />

        <PreviewCard>
          <ExampleItem title="Theme Colors">
            <DualProgressBar
              percent1={50}
              percent2={30}
              color1={colors.accent}
              color2={colors.success}
            />
          </ExampleItem>

          <ExampleItem title="Purple and Teal">
            <DualProgressBar
              percent1={45}
              percent2={35}
              color1="#7C3AED"
              color2="#0F766E"
              label1="Development"
              label2="Testing"
            />
          </ExampleItem>

          <ExampleItem title="Blue and Orange">
            <DualProgressBar
              percent1={60}
              percent2={25}
              color1="#2563EB"
              color2="#F59E0B"
              label1="Completed"
              label2="In Review"
            />
          </ExampleItem>
        </PreviewCard>

        {/* 5. Track Styles */}
        <SectionTitle
          title="Track Customization"
          description="Customize the remaining track and corner appearance."
        />

        <PreviewCard>
          <ExampleItem title="Striped Remaining Track">
            <DualProgressBar
              percent1={40}
              percent2={30}
              stripeColor="#CBD5E1"
            />
          </ExampleItem>

          <ExampleItem title="Custom Track Color">
            <DualProgressBar
              percent1={50}
              percent2={25}
              trackColor="#F1F5F9"
              stripeColor="#CBD5E1"
            />
          </ExampleItem>

          <ExampleItem title="Square Corners">
            <DualProgressBar percent1={45} percent2={35} rounded={false} />
          </ExampleItem>
        </PreviewCard>

        {/* 6. Edge Cases */}
        <SectionTitle
          title="Progress States"
          description="Handle different progress values safely."
        />

        <PreviewCard>
          <ExampleItem title="No Progress">
            <DualProgressBar percent1={0} percent2={0} />
          </ExampleItem>

          <ExampleItem title="Full Progress">
            <DualProgressBar percent1={60} percent2={40} />
          </ExampleItem>

          <ExampleItem title="Single Segment">
            <DualProgressBar percent1={75} percent2={0} />
          </ExampleItem>
        </PreviewCard>

        {/* Footer */}
        <Text style={[styles.footer, { color: colors.textSecondary }]}>
          RN UI Playground · Dual Progress Bar Components
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DualProgressBarScreen;
