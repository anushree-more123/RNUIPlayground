import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  faArrowLeft,
  faCheck,
  faClock,
  faTimes,
  faStar,
  faBell,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

import AppIcon from '../../../components/common/AppIcon';
import Badge from '../../../components/ui-components/badges/Badge/Badge';
import { useAppTheme } from '../../../theme/ThemeContext';
import { UIStackParamList } from '../../../navigation/types';
import { styles } from './BadgesScreen.styles';

type BadgesScreenProps = NativeStackScreenProps<UIStackParamList, 'Badges'>;

const BadgesScreen: React.FC<BadgesScreenProps> = ({ navigation }) => {
  const { colors } = useAppTheme();

  const SectionTitle = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
        {title}
      </Text>
      <Text
        style={[styles.sectionDescription, { color: colors.textSecondary }]}
      >
        {description}
      </Text>
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
              Badges
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Labels, tags and status indicators for your interfaces.
            </Text>
          </View>
        </View>

        {/* Variants */}
        <SectionTitle
          title="Badge Variants"
          description="Different visual styles for labels and tags."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge label="Solid" variant="solid" />
            <Badge label="Soft" variant="soft" />
            <Badge label="Outlined" variant="outlined" />
            <Badge label="Subtle" variant="subtle" />
          </View>
        </PreviewCard>

        {/* Semantic colors */}
        <SectionTitle
          title="Semantic Colors"
          description="Use color tones to communicate meaning."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge label="Primary" tone="accent" />
            <Badge label="Success" tone="success" />
            <Badge label="Warning" tone="warning" />
          </View>

          <View style={styles.badgeRow}>
            <Badge label="Error" tone="error" />
            <Badge label="Neutral" tone="neutral" />
            <Badge label="Information" tone="info" />
          </View>

          <View style={styles.badgeRow}>
            <Badge label="Primary" variant="solid" tone="accent" />
            <Badge label="Success" variant="solid" tone="success" />
            <Badge label="Warning" variant="solid" tone="warning" />
          </View>

          <View style={styles.badgeRow}>
            <Badge label="Error" variant="solid" tone="error" />
            <Badge label="Neutral" variant="solid" tone="neutral" />
            <Badge label="Info" variant="solid" tone="info" />
          </View>
        </PreviewCard>

        {/* Reference inspired color collection */}
        <SectionTitle
          title="Color Collection"
          description="Custom color combinations for colorful labels."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge
              label="Red"
              customColors={{
                backgroundColor: '#FCE4E4',
                textColor: '#C43D3D',
              }}
            />
            <Badge
              label="Orange"
              customColors={{
                backgroundColor: '#FCEBD9',
                textColor: '#B96A20',
              }}
            />
            <Badge
              label="Yellow"
              customColors={{
                backgroundColor: '#FFF4C2',
                textColor: '#96730B',
              }}
            />
            <Badge
              label="Green"
              customColors={{
                backgroundColor: '#DDF5E8',
                textColor: '#267A51',
              }}
            />
          </View>

          <View style={styles.badgeRow}>
            <Badge
              label="Cyan"
              customColors={{
                backgroundColor: '#DDF6F7',
                textColor: '#187D85',
              }}
            />
            <Badge
              label="Blue"
              customColors={{
                backgroundColor: '#DFECFF',
                textColor: '#3268B5',
              }}
            />
            <Badge
              label="Purple"
              customColors={{
                backgroundColor: '#EEE5FF',
                textColor: '#7045B5',
              }}
            />
            <Badge
              label="Pink"
              customColors={{
                backgroundColor: '#F9E2F4',
                textColor: '#A83E8E',
              }}
            />
          </View>

          <View style={styles.badgeRow}>
            <Badge
              label="Red"
              variant="solid"
              customColors={{
                backgroundColor: '#D94B4B',
                textColor: '#FFFFFF',
              }}
            />
            <Badge
              label="Orange"
              variant="solid"
              customColors={{
                backgroundColor: '#E58B32',
                textColor: '#FFFFFF',
              }}
            />
            <Badge
              label="Green"
              variant="solid"
              customColors={{
                backgroundColor: '#2E9D70',
                textColor: '#FFFFFF',
              }}
            />
            <Badge
              label="Blue"
              variant="solid"
              customColors={{
                backgroundColor: '#3977CF',
                textColor: '#FFFFFF',
              }}
            />
          </View>
        </PreviewCard>

        {/* Dot badges */}
        <SectionTitle
          title="Dot Indicators"
          description="Small colored indicators alongside labels."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge label="Online" showDot tone="success" />
            <Badge label="Away" showDot tone="warning" />
            <Badge label="Offline" showDot tone="neutral" />
          </View>

          <View style={styles.badgeRow}>
            <Badge label="Active" showDot variant="outlined" tone="success" />
            <Badge label="Pending" showDot variant="outlined" tone="warning" />
            <Badge label="Failed" showDot variant="outlined" tone="error" />
          </View>

          <View style={styles.badgeRow}>
            <Badge
              label="Current Month"
              showDot
              variant="subtle"
              tone="accent"
            />
            <Badge
              label="Previous Month"
              showDot
              variant="subtle"
              tone="neutral"
            />
          </View>
        </PreviewCard>

        {/* Status badges */}
        <SectionTitle
          title="Status Badges"
          description="Useful for orders, tasks and workflows."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge label="Completed" icon={faCheck} tone="success" />
            <Badge label="In Progress" icon={faClock} tone="info" />
          </View>

          <View style={styles.badgeRow}>
            <Badge label="Cancelled" icon={faTimes} tone="error" />
            <Badge label="Featured" icon={faStar} tone="warning" />
          </View>

          <View style={styles.badgeRow}>
            <Badge label="New" variant="solid" tone="accent" />
            <Badge label="Popular" variant="soft" tone="success" />
            <Badge label="Draft" variant="outlined" tone="neutral" />
          </View>
        </PreviewCard>

        {/* Sizes */}
        <SectionTitle
          title="Badge Sizes"
          description="Small, medium and large badges."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge label="Small" size="small" />
            <Badge label="Medium" size="medium" />
            <Badge label="Large" size="large" />
          </View>
        </PreviewCard>

        {/* Shapes */}
        <SectionTitle
          title="Badge Shapes"
          description="Different corner styles for your design."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge label="Rounded" shape="rounded" />
            <Badge label="Pill" shape="pill" />
            <Badge label="Square" shape="square" />
          </View>
        </PreviewCard>

        {/* Icon badges */}
        <SectionTitle
          title="Icon Badges"
          description="Combine icons and labels."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge label="Verified" icon={faCheck} tone="success" />
            <Badge label="Reminder" icon={faBell} tone="warning" />
          </View>

          <View style={styles.badgeRow}>
            <Badge label="Special Offer" icon={faTag} tone="accent" />
            <Badge label="Favorite" icon={faStar} tone="error" />
          </View>
        </PreviewCard>

        {/* Count badges */}
        <SectionTitle
          title="Count Badges"
          description="Compact number labels for notifications and lists."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge label="1" size="small" tone="error" />
            <Badge label="5" size="medium" tone="accent" />
            <Badge label="24" size="medium" tone="success" />
            <Badge label="99+" size="large" tone="warning" />
          </View>
        </PreviewCard>

        {/* Custom colors */}
        <SectionTitle
          title="Custom Styling"
          description="Override colors and typography."
        />

        <PreviewCard>
          <View style={styles.badgeRow}>
            <Badge
              label="Custom Blue"
              variant="solid"
              customColors={{
                backgroundColor: '#243B80',
                textColor: '#FFFFFF',
              }}
            />

            <Badge
              label="Custom Pink"
              variant="soft"
              customColors={{
                backgroundColor: '#FCE4EC',
                textColor: '#C2185B',
              }}
            />
          </View>

          <View style={styles.badgeRow}>
            <Badge
              label="Custom Outline"
              variant="outlined"
              customColors={{
                backgroundColor: 'transparent',
                textColor: '#087F8C',
                borderColor: '#087F8C',
              }}
            />

            <Badge
              label="Custom Dot"
              showDot
              customColors={{
                backgroundColor: '#E4F4F1',
                textColor: '#176B5B',
                dotColor: '#176B5B',
              }}
            />
          </View>

          <View style={styles.badgeRow}>
            <Badge
              label="Premium"
              size="large"
              shape="rounded"
              icon={faStar}
              customColors={{
                backgroundColor: '#263D82',
                textColor: '#FFFFFF',
                iconColor: '#FFE08A',
              }}
              textStyle={{ letterSpacing: 0.5 }}
            />
          </View>
        </PreviewCard>

        <Text style={[styles.footer, { color: colors.textSecondary }]}>
          RN UI Playground · Badge Components
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BadgesScreen;
