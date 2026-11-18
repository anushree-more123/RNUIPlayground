import React from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  faPlus,
  faArrowRight,
  faHeart,
  faDownload,
  faTrash,
  faPen,
  faCheck,
  faShoppingCart,
  faEnvelope,
  faShare,
  faBell,
  faStar,
  faCircleInfo,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/buttons/Button';
import { useAppTheme } from '../../theme/ThemeContext';
import { styles } from './ButtonsScreen.styles';

const ButtonsScreen = () => {
  const { colors } = useAppTheme();

  const showMessage = (message: string) => {
    Alert.alert('Button pressed', message);
  };

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
            Buttons
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Explore button variants, sizes, colors, states and custom styles.
          </Text>
        </View>

        {/* 1. Variants */}
        <SectionTitle
          title="Button Variants"
          description="Different visual styles for different actions."
        />

        <PreviewCard>
          <Button title="Solid Button" onPress={() => showMessage('Solid')} />

          <Button
            title="Outlined Button"
            variant="outlined"
            onPress={() => showMessage('Outlined')}
          />

          <Button
            title="Soft Button"
            variant="soft"
            onPress={() => showMessage('Soft')}
          />

          <Button
            title="Text Button"
            variant="text"
            onPress={() => showMessage('Text')}
          />
        </PreviewCard>

        {/* 2. Shapes */}
        <SectionTitle
          title="Button Shapes"
          description="Choose a shape that fits your interface."
        />

        <PreviewCard>
          <Button title="Rounded" shape="rounded" onPress={() => {}} />
          <Button title="Pill Shape" shape="pill" onPress={() => {}} />
          <Button title="Square Shape" shape="square" onPress={() => {}} />
        </PreviewCard>

        {/* 3. Sizes */}
        <SectionTitle
          title="Button Sizes"
          description="Small, medium and large buttons."
        />

        <PreviewCard>
          <Button title="Small Button" size="small" onPress={() => {}} />
          <Button title="Medium Button" size="medium" onPress={() => {}} />
          <Button title="Large Button" size="large" onPress={() => {}} />
        </PreviewCard>

        {/* 4. Colors */}
        <SectionTitle
          title="Button Colors"
          description="Use predefined semantic tones."
        />

        <PreviewCard>
          <Button title="Accent" tone="accent" onPress={() => {}} />
          <Button title="Success" tone="success" onPress={() => {}} />
          <Button title="Warning" tone="warning" onPress={() => {}} />
          <Button title="Error" tone="error" onPress={() => {}} />
        </PreviewCard>

        {/* 5. Custom colors */}
        <SectionTitle
          title="Custom Colors"
          description="Override the default theme colors."
        />

        <PreviewCard>
          <Button
            title="Purple Custom"
            onPress={() => {}}
            customColors={{
              backgroundColor: '#6D28D9',
              textColor: '#FFFFFF',
            }}
          />

          <Button
            title="Teal Custom"
            onPress={() => {}}
            customColors={{
              backgroundColor: '#0F766E',
              textColor: '#FFFFFF',
            }}
          />

          <Button
            title="Custom Outline"
            variant="outlined"
            onPress={() => {}}
            customColors={{
              backgroundColor: 'transparent',
              textColor: '#0F766E',
              borderColor: '#0F766E',
            }}
          />

          <Button
            title="Custom Soft"
            variant="soft"
            onPress={() => {}}
            customColors={{
              backgroundColor: '#FCE7F3',
              textColor: '#BE185D',
            }}
          />
        </PreviewCard>

        {/* 6. Icon buttons */}
        <SectionTitle
          title="Icon Buttons"
          description="Icon-only buttons for compact actions."
        />

        <PreviewCard>
          <View style={styles.horizontalRow}>
            <Button icon={faPlus} iconOnly title="Add" onPress={() => {}} />
            <Button
              icon={faHeart}
              iconOnly
              title="Favorite"
              tone="error"
              onPress={() => {}}
            />
            <Button
              icon={faPen}
              iconOnly
              title="Edit"
              tone="success"
              onPress={() => {}}
            />
            <Button
              icon={faTrash}
              iconOnly
              title="Delete"
              tone="error"
              onPress={() => {}}
            />
          </View>

          <View style={styles.horizontalRow}>
            <Button
              icon={faBell}
              iconOnly
              variant="soft"
              title="Notifications"
              onPress={() => {}}
            />
            <Button
              icon={faStar}
              iconOnly
              variant="outlined"
              title="Star"
              onPress={() => {}}
            />
            <Button
              icon={faCircleInfo}
              iconOnly
              variant="text"
              title="Information"
              onPress={() => {}}
            />
          </View>
        </PreviewCard>

        {/* 7. Buttons with icons */}
        <SectionTitle
          title="Buttons With Icons"
          description="Place icons before or after the label."
        />

        <PreviewCard>
          <Button title="Add Item" icon={faPlus} onPress={() => {}} />

          <Button
            title="Continue"
            icon={faArrowRight}
            iconPosition="right"
            onPress={() => {}}
          />

          <Button
            title="Download"
            icon={faDownload}
            tone="success"
            onPress={() => {}}
          />

          <Button
            title="Add to Cart"
            icon={faShoppingCart}
            onPress={() => {}}
          />

          <Button
            title="Send Message"
            icon={faEnvelope}
            variant="outlined"
            onPress={() => {}}
          />

          <Button
            title="Share"
            icon={faShare}
            variant="soft"
            onPress={() => {}}
          />
        </PreviewCard>

        {/* 8. Full width */}
        <SectionTitle
          title="Full Width Buttons"
          description="Buttons that stretch across their container."
        />

        <PreviewCard>
          <Button
            title="Primary Action"
            onPress={() => {}}
            style={styles.fullWidth}
          />

          <Button
            title="Outlined Action"
            variant="outlined"
            onPress={() => {}}
            style={styles.fullWidth}
          />

          <Button
            title="Continue"
            icon={faArrowRight}
            iconPosition="right"
            onPress={() => {}}
            style={styles.fullWidth}
          />
        </PreviewCard>

        {/* 9. States */}
        <SectionTitle
          title="Button States"
          description="Disabled and loading states."
        />

        <PreviewCard>
          <Button title="Normal" onPress={() => {}} />

          <Button title="Disabled" disabled onPress={() => {}} />

          <Button title="Loading" loading onPress={() => {}} />

          <Button
            icon={faCheck}
            iconOnly
            disabled
            title="Disabled icon"
            onPress={() => {}}
          />
        </PreviewCard>

        {/* 10. Custom styling */}
        <SectionTitle
          title="Custom Styling"
          description="Override dimensions, border radius and typography."
        />

        <PreviewCard>
          <Button
            title="Extra Large Button"
            onPress={() => {}}
            customColors={{
              backgroundColor: '#7C3AED',
              textColor: '#FFFFFF',
            }}
            style={{
              width: '100%',
              minHeight: 58,
              borderRadius: 16,
            }}
            labelStyle={{
              fontSize: 17,
              fontWeight: '800',
            }}
          />

          <Button
            title="Rounded Custom Button"
            onPress={() => {}}
            customColors={{
              backgroundColor: '#DB2777',
              textColor: '#FFFFFF',
            }}
            style={{
              borderRadius: 30,
              paddingHorizontal: 30,
              minHeight: 48,
            }}
          />

          <Button
            title="Thick Border"
            variant="outlined"
            onPress={() => {}}
            customColors={{
              backgroundColor: 'transparent',
              textColor: '#2563EB',
              borderColor: '#2563EB',
            }}
            style={{
              borderWidth: 2,
              borderRadius: 6,
              paddingHorizontal: 28,
            }}
          />
        </PreviewCard>

        {/* 11. Common actions */}
        <SectionTitle
          title="Common Actions"
          description="Examples of buttons used in real applications."
        />

        <PreviewCard>
          <Button
            title="Save Changes"
            icon={faCheck}
            tone="success"
            onPress={() => showMessage('Saved')}
          />

          <Button
            title="Delete Account"
            icon={faTrash}
            tone="error"
            onPress={() => showMessage('Delete account')}
          />

          <Button
            title="Edit Profile"
            icon={faPen}
            variant="outlined"
            onPress={() => showMessage('Edit profile')}
          />

          <Button
            title="Refresh"
            icon={faRotate}
            variant="soft"
            onPress={() => showMessage('Refresh')}
          />
        </PreviewCard>

        {/* Footer */}
        <Text style={[styles.footer, { color: colors.textSecondary }]}>
          RN UI Playground · Button Components
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonsScreen;
