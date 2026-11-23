import React from 'react';
import { ScrollView, Text, View, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppIcon from '../../components/common/AppIcon';
import { UIStackParamList } from '../../navigation/types';
import {
  faBoxOpen,
  faWallet,
  faCreditCard,
  faMusic,
  faCoffee,
  faTicket,
  faCalendar,
  faGift,
  faStar,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import ProductCard from '../../components/cards/ProductCard/ProductCard';
import BalanceCard from '../../components/cards/BalanceCard/BalanceCard';
import MetricCard from '../../components/cards/MetricCard/MetricCard';
import SummaryCard from '../../components/cards/SummaryCard/SummaryCard';
import TransactionCard from '../../components/cards/TransactionCard/TransactionCard';
import PlanCard from '../../components/cards/PlanCard/PlanCard';
import ProgressCard from '../../components/cards/ProgressCard/ProgressCard';

import { useAppTheme } from '../../theme/ThemeContext';
import { styles } from './CardsScreen.styles';

type CardsScreenProps = NativeStackScreenProps<UIStackParamList, 'Cards'>;

const CardsScreen: React.FC<CardsScreenProps> = ({ navigation }) => {
  const { colors } = useAppTheme();

  const showMessage = (message: string) => {
    Alert.alert('Card pressed', message);
  };

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
          <Pressable
            onPress={() => navigation.goBack()}
            style={[styles.backButton, { backgroundColor: colors.accentLight }]}
            hitSlop={8}
          >
            <AppIcon icon={faArrowLeft} color={colors.accent} size={18} />
          </Pressable>

          <View style={styles.headerContent}>
            <Text style={[styles.heading, { color: colors.textPrimary }]}>
              Cards
            </Text>

            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Reusable cards for different UI requirements.
            </Text>
          </View>
        </View>

        {/* Product Card */}
        <SectionTitle
          title="Product Card"
          description="Product information with price, stock and action."
        />

        <ProductCard
          title="Sample Product"
          description="A useful everyday product with a simple design."
          price="$24.50"
          stockLabel="In Stock: 40"
          icon={faBoxOpen}
          onPress={() => showMessage('Product details')}
          onActionPress={() => showMessage('Added to cart')}
        />

        {/* Balance Cards */}
        <SectionTitle
          title="Balance Cards"
          description="Wallet, account and savings balance."
        />

        <View style={styles.horizontalRow}>
          <BalanceCard
            title="Available Balance"
            amount="$46,850"
            subtitle="Account ending 5382"
            icon={faCreditCard}
            onPress={() => showMessage('Available balance')}
          />

          <BalanceCard
            title="Total Savings"
            amount="$1,530"
            subtitle="Savings account"
            icon={faWallet}
            variant="accent"
            onPress={() => showMessage('Total savings')}
          />
        </View>

        {/* Metric Cards */}
        <SectionTitle
          title="Metric Cards"
          description="Weekly and monthly performance indicators."
        />

        <View style={styles.horizontalRow}>
          <MetricCard
            title="Activities This Week"
            value="136"
            change="7.6%"
            description="Average 26 per day"
            trend="down"
          />

          <MetricCard
            title="Activities This Month"
            value="986"
            change="10.6%"
            description="Average 146 per week"
            trend="up"
          />
        </View>

        {/* Summary Card */}
        <SectionTitle
          title="Summary Card"
          description="Highlighted totals with supporting content."
        />

        <SummaryCard
          title="Total Expenses"
          amount="$1,650"
          change="+12%"
          description="Your total expenses have increased this month."
          icon={faWallet}
        />

        {/* Transaction Cards */}
        <SectionTitle
          title="Transaction Cards"
          description="Individual transaction and activity items."
        />

        <View style={styles.transactionList}>
          <TransactionCard
            title="Subscription"
            subtitle="Today"
            amount="$120"
            icon={faMusic}
            onPress={() => showMessage('Subscription')}
          />

          <TransactionCard
            title="Daily Purchase"
            subtitle="Yesterday"
            amount="$27"
            icon={faCoffee}
            onPress={() => showMessage('Daily purchase')}
          />

          <TransactionCard
            title="Entertainment"
            subtitle="2 days ago"
            amount="$365"
            icon={faTicket}
            onPress={() => showMessage('Entertainment')}
          />

          <TransactionCard
            title="Gift Purchase"
            subtitle="Last week"
            amount="$45"
            icon={faGift}
            onPress={() => showMessage('Gift purchase')}
          />
        </View>

        {/* Plan Cards */}
        <SectionTitle
          title="Plan Cards"
          description="Plans, subscriptions and membership options."
        />

        <View style={styles.horizontalRow}>
          <PlanCard
            title="Basic Plan"
            description="Essential features for everyday use."
            price="$11"
            period="week"
            icon={faCalendar}
            onPress={() => showMessage('Basic plan')}
          />

          <PlanCard
            title="Premium Plan"
            description="Additional features and benefits."
            price="$29"
            period="month"
            icon={faStar}
            featured
            onPress={() => showMessage('Premium plan')}
          />
        </View>

        {/* Progress Cards */}
        <SectionTitle
          title="Progress Cards"
          description="Track project and campaign completion."
        />

        <View style={styles.horizontalRow}>
          <ProgressCard
            title="Project One"
            description="Design and development progress."
            completed={343}
            pending={368}
            progress={48}
            onPress={() => showMessage('Project one')}
          />

          <ProgressCard
            title="Project Two"
            description="Product implementation progress."
            completed={488}
            pending={105}
            progress={72}
            onPress={() => showMessage('Project two')}
          />
        </View>

        <View style={styles.horizontalRow}>
          <ProgressCard
            title="Campaign One"
            description="Marketing campaign activities."
            completed={76}
            pending={24}
            progress={76}
          />

          <ProgressCard
            title="Campaign Two"
            description="Customer engagement activities."
            completed={54}
            pending={46}
            progress={54}
          />
        </View>

        {/* Custom BaseCard examples */}
        <SectionTitle
          title="Card Variations"
          description="Additional styles available through BaseCard."
        />

        <View style={styles.transactionList}>
          <View
            style={[
              styles.variationCard,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
              },
            ]}
          >
            <Text
              style={[styles.variationTitle, { color: colors.textPrimary }]}
            >
              Default Card
            </Text>
            <Text
              style={[
                styles.sectionDescription,
                { color: colors.textSecondary },
              ]}
            >
              Standard themed card container.
            </Text>
          </View>

          <View
            style={[
              styles.variationCard,
              {
                backgroundColor: colors.surface,
                borderColor: colors.accent,
                borderWidth: 1.5,
              },
            ]}
          >
            <Text
              style={[styles.variationTitle, { color: colors.textPrimary }]}
            >
              Outlined Card
            </Text>
            <Text
              style={[
                styles.sectionDescription,
                { color: colors.textSecondary },
              ]}
            >
              Card with a highlighted border.
            </Text>
          </View>

          <View
            style={[
              styles.variationCard,
              {
                backgroundColor: colors.surfaceSecondary,
                borderColor: colors.surfaceSecondary,
              },
            ]}
          >
            <Text
              style={[styles.variationTitle, { color: colors.textPrimary }]}
            >
              Filled Card
            </Text>
            <Text
              style={[
                styles.sectionDescription,
                { color: colors.textSecondary },
              ]}
            >
              Card with a secondary surface background.
            </Text>
          </View>
        </View>

        <Text style={[styles.footer, { color: colors.textSecondary }]}>
          RN UI Playground · Card Components
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardsScreen;
