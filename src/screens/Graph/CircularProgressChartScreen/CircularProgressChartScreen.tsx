import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

import AppIcon from '../../../components/common/AppIcon';
import PrimaryCircularProgressChart from '../../../components/graph-components/circular-progress/PrimaryCircularProgressChart/PrimaryCircularProgressChart';

import { GraphStackParamList } from '../../../navigation/types';
import { useAppTheme } from '../../../theme/ThemeContext';
import { styles } from './CircularProgressChartScreen.styles';
import SecondaryCircularProgressChart from '../../../components/graph-components/circular-progress/SecondaryCircularProgressChart/SecondaryCircularProgressChart';

type CircularProgressChartScreenProps = NativeStackScreenProps<
  GraphStackParamList,
  'CircularProgressChart'
>;

const CircularProgressChartScreen: React.FC<
  CircularProgressChartScreenProps
> = ({ navigation }) => {
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
              Circular Progress
            </Text>

            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Explore circular progress charts, animations and custom styles.
            </Text>
          </View>
        </View>

        {/* 1. Basic Circular Progress */}
        <SectionTitle
          title="Basic Circular Progress"
          description="Display progress values inside circular indicators."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="75% Progress">
              <PrimaryCircularProgressChart progress={75} size={120} />
            </ExampleItem>

            <ExampleItem title="45% Progress">
              <PrimaryCircularProgressChart progress={45} size={120} />
            </ExampleItem>
          </View>

          <View style={styles.circularRow}>
            <ExampleItem title="25% Progress">
              <PrimaryCircularProgressChart progress={25} size={100} />
            </ExampleItem>

            <ExampleItem title="90% Progress">
              <PrimaryCircularProgressChart progress={90} size={100} />
            </ExampleItem>
          </View>
        </PreviewCard>

        {/* 2. Circular Titles */}
        <SectionTitle
          title="Circular Progress Titles"
          description="Display meaningful titles inside the progress chart."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="Completed">
              <PrimaryCircularProgressChart
                progress={75}
                title="Completed"
                size={130}
              />
            </ExampleItem>

            <ExampleItem title="Project">
              <PrimaryCircularProgressChart
                progress={60}
                title="Project"
                size={130}
              />
            </ExampleItem>
          </View>
        </PreviewCard>

        {/* 3. Sizes */}
        <SectionTitle
          title="Circular Chart Sizes"
          description="Adjust chart dimensions and progress thickness."
        />

        <PreviewCard>
          <ExampleItem title="Small Size">
            <PrimaryCircularProgressChart progress={65} size={90} stroke={7} />
          </ExampleItem>

          <ExampleItem title="Medium Size">
            <PrimaryCircularProgressChart
              progress={75}
              size={130}
              stroke={10}
            />
          </ExampleItem>

          <ExampleItem title="Large Size">
            <PrimaryCircularProgressChart
              progress={85}
              size={170}
              stroke={14}
            />
          </ExampleItem>
        </PreviewCard>

        {/* 4. Progress Colors */}
        <SectionTitle
          title="Progress Colors"
          description="Use different colors to represent progress states."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="Accent">
              <PrimaryCircularProgressChart
                progress={75}
                color={colors.accent}
                size={110}
              />
            </ExampleItem>

            <ExampleItem title="Success">
              <PrimaryCircularProgressChart
                progress={90}
                color={colors.success}
                size={110}
              />
            </ExampleItem>
          </View>

          <View style={styles.circularRow}>
            <ExampleItem title="Warning">
              <PrimaryCircularProgressChart
                progress={55}
                color={colors.warning}
                size={110}
              />
            </ExampleItem>

            <ExampleItem title="Error">
              <PrimaryCircularProgressChart
                progress={35}
                color={colors.error}
                size={110}
              />
            </ExampleItem>
          </View>
        </PreviewCard>

        {/* 5. Outer Circle */}
        <SectionTitle
          title="Outer Circle"
          description="Add an additional circle around the main progress."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="Outer Track">
              <PrimaryCircularProgressChart
                progress={70}
                showOuterCircle
                size={140}
              />
            </ExampleItem>

            <ExampleItem title="Outer Progress">
              <PrimaryCircularProgressChart
                progress={70}
                outerProgress={45}
                showOuterCircle
                showProgressOuterCircle
                size={140}
              />
            </ExampleItem>
          </View>
        </PreviewCard>

        {/* 6. Custom Outer Circle */}
        <SectionTitle
          title="Custom Outer Circle"
          description="Customize outer ring colors, thickness and spacing."
        />

        <PreviewCard>
          <ExampleItem title="Accent and Success">
            <PrimaryCircularProgressChart
              progress={75}
              outerProgress={55}
              showOuterCircle
              showProgressOuterCircle
              color={colors.accent}
              outerCircleColor={colors.success}
              size={160}
              stroke={12}
              outerStroke={7}
              outerGap={10}
            />
          </ExampleItem>

          <ExampleItem title="Custom Outer Ring">
            <PrimaryCircularProgressChart
              progress={60}
              outerProgress={85}
              showOuterCircle
              showProgressOuterCircle
              color="#7C3AED"
              outerCircleColor="#0F766E"
              outerCircleBackground="#E2E8F0"
              size={170}
              stroke={10}
              outerStroke={8}
              outerGap={12}
            />
          </ExampleItem>
        </PreviewCard>

        {/* 7. Percentage Display */}
        <SectionTitle
          title="Percentage Display"
          description="Control percentage visibility and formatting."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="With Percentage">
              <PrimaryCircularProgressChart
                progress={80}
                showPercent
                size={120}
              />
            </ExampleItem>

            <ExampleItem title="Without Percentage">
              <PrimaryCircularProgressChart
                progress={80}
                showPercent={false}
                size={120}
              />
            </ExampleItem>
          </View>

          <ExampleItem title="Without Percentage Symbol">
            <PrimaryCircularProgressChart
              progress={65}
              showPercentUnit={false}
              size={120}
            />
          </ExampleItem>
        </PreviewCard>

        {/* 8. Custom Typography */}
        <SectionTitle
          title="Custom Typography"
          description="Customize the title and percentage text."
        />

        <PreviewCard>
          <ExampleItem title="Custom Font Sizes">
            <PrimaryCircularProgressChart
              progress={85}
              title="Performance"
              size={160}
              titleFontSize={17}
              percentTextSize={30}
            />
          </ExampleItem>

          <ExampleItem title="Custom Text Colors">
            <PrimaryCircularProgressChart
              progress={70}
              title="Completed"
              size={140}
              percentColor={colors.accent}
            />
          </ExampleItem>
        </PreviewCard>

        {/* 9. Animation */}
        <SectionTitle
          title="Progress Animation"
          description="Control the circular progress animation."
        />

        <PreviewCard>
          <ExampleItem title="Animated Progress">
            <PrimaryCircularProgressChart
              progress={85}
              title="Animated"
              size={140}
              animate
              animationDuration={1200}
            />
          </ExampleItem>

          <ExampleItem title="Without Animation">
            <PrimaryCircularProgressChart
              progress={85}
              title="Static"
              size={140}
              animate={false}
            />
          </ExampleItem>
        </PreviewCard>

        {/* 10. Edge Cases */}
        <SectionTitle
          title="Progress States"
          description="Handle minimum and maximum progress values."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="Zero Progress">
              <PrimaryCircularProgressChart progress={0} size={110} />
            </ExampleItem>

            <ExampleItem title="Full Progress">
              <PrimaryCircularProgressChart progress={100} size={110} />
            </ExampleItem>
          </View>
        </PreviewCard>

        {/* 11. Secondary Circular Progress */}
        <SectionTitle
          title="Secondary Circular Progress"
          description="Circular progress with an animated outer ring and inner track."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="75% Progress">
              <SecondaryCircularProgressChart progress={75} size={120} />
            </ExampleItem>

            <ExampleItem title="45% Progress">
              <SecondaryCircularProgressChart
                progress={45}
                size={120}
                color={colors.success}
              />
            </ExampleItem>
          </View>

          <View style={styles.circularRow}>
            <ExampleItem title="25% Progress">
              <SecondaryCircularProgressChart
                progress={25}
                size={100}
                color={colors.warning}
              />
            </ExampleItem>

            <ExampleItem title="90% Progress">
              <SecondaryCircularProgressChart
                progress={90}
                size={100}
                color={colors.error}
              />
            </ExampleItem>
          </View>
        </PreviewCard>

        {/* 12. Secondary Chart Sizes */}
        <SectionTitle
          title="Secondary Chart Sizes"
          description="Customize the size and thickness of circular progress rings."
        />

        <PreviewCard>
          <ExampleItem title="Small">
            <SecondaryCircularProgressChart
              progress={65}
              size={90}
              innerStroke={6}
              outerStroke={6}
              outerGap={6}
            />
          </ExampleItem>

          <ExampleItem title="Medium">
            <SecondaryCircularProgressChart
              progress={75}
              size={130}
              innerStroke={8}
              outerStroke={8}
              outerGap={8}
            />
          </ExampleItem>

          <ExampleItem title="Large">
            <SecondaryCircularProgressChart
              progress={85}
              size={170}
              innerStroke={12}
              outerStroke={10}
              outerGap={12}
            />
          </ExampleItem>
        </PreviewCard>

        {/* 13. Custom Track Colors */}
        <SectionTitle
          title="Custom Track Colors"
          description="Change the inner track and outer progress colors."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="Accent">
              <SecondaryCircularProgressChart
                progress={75}
                size={120}
                color={colors.accent}
                innerTrackColor={colors.surfaceSecondary}
              />
            </ExampleItem>

            <ExampleItem title="Success">
              <SecondaryCircularProgressChart
                progress={90}
                size={120}
                color={colors.success}
                innerTrackColor={colors.border}
              />
            </ExampleItem>
          </View>

          <ExampleItem title="Custom Colors">
            <SecondaryCircularProgressChart
              progress={65}
              size={150}
              color="#7C3AED"
              innerTrackColor="#EDE9FE"
            />
          </ExampleItem>
        </PreviewCard>

        {/* 14. Percentage Display */}
        <SectionTitle
          title="Percentage Display"
          description="Control the percentage text inside the chart."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="With Percentage">
              <SecondaryCircularProgressChart
                progress={80}
                showPercent
                size={120}
              />
            </ExampleItem>

            <ExampleItem title="Without Percentage">
              <SecondaryCircularProgressChart
                progress={80}
                showPercent={false}
                size={120}
              />
            </ExampleItem>
          </View>

          <ExampleItem title="Without Percentage Symbol">
            <SecondaryCircularProgressChart
              progress={65}
              showPercentUnit={false}
              size={120}
            />
          </ExampleItem>
        </PreviewCard>

        {/* 15. Animation */}
        <SectionTitle
          title="Progress Animation"
          description="Configure animation behavior and duration."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="Animated">
              <SecondaryCircularProgressChart
                progress={85}
                size={120}
                animate
                animationDuration={1200}
              />
            </ExampleItem>

            <ExampleItem title="Static">
              <SecondaryCircularProgressChart
                progress={85}
                size={120}
                animate={false}
              />
            </ExampleItem>
          </View>
        </PreviewCard>

        {/* 16. Progress States */}
        <SectionTitle
          title="Progress States"
          description="Test minimum and maximum progress values."
        />

        <PreviewCard>
          <View style={styles.circularRow}>
            <ExampleItem title="Zero Progress">
              <SecondaryCircularProgressChart progress={0} size={110} />
            </ExampleItem>

            <ExampleItem title="Full Progress">
              <SecondaryCircularProgressChart progress={100} size={110} />
            </ExampleItem>
          </View>
        </PreviewCard>

        {/* Footer */}
        <Text style={[styles.footer, { color: colors.textSecondary }]}>
          RN UI Playground · Primary Circular Progress
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CircularProgressChartScreen;
