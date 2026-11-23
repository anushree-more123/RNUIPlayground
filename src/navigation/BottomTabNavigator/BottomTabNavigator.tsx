import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
  faShapes,
  faLayerGroup,
  faSliders,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

import HomeScreen from '../../screens/Home/HomeScreen';
import ButtonsScreen from '../../screens/Buttons/ButtonsScreen';

import { useAppTheme } from '../../theme/ThemeContext';

import {
  RootTabParamList,
  UIStackParamList,
  LayoutStackParamList,
  InputsStackParamList,
  GraphStackParamList,
} from '../types';
import CardsScreen from '../../screens/Cards/CardsScreen';
import BadgesScreen from '../../screens/Badges/BadgesScreen';

// Stack navigators
const UIStack = createNativeStackNavigator<UIStackParamList>();
const LayoutStack = createNativeStackNavigator<LayoutStackParamList>();
const InputsStack = createNativeStackNavigator<InputsStackParamList>();
const GraphStack = createNativeStackNavigator<GraphStackParamList>();

const Tab = createBottomTabNavigator<RootTabParamList>();

// UI Components Stack
const UIStackNavigator = () => (
  <UIStack.Navigator screenOptions={{ headerShown: false }}>
    <UIStack.Screen name="Home" component={HomeScreen} />
    <UIStack.Screen name="Buttons" component={ButtonsScreen} />
    <UIStack.Screen name="Cards" component={CardsScreen} />
    <UIStack.Screen name="Badges" component={BadgesScreen} />
  </UIStack.Navigator>
);

// Layout Stack
const LayoutStackNavigator = () => (
  <LayoutStack.Navigator screenOptions={{ headerShown: false }}>
    <LayoutStack.Screen name="LayoutHome" component={LayoutScreen} />
    <LayoutStack.Screen name="LayoutDetail" component={LayoutDetailScreen} />
  </LayoutStack.Navigator>
);

// Input Elements Stack
const InputsStackNavigator = () => (
  <InputsStack.Navigator screenOptions={{ headerShown: false }}>
    <InputsStack.Screen name="InputsHome" component={InputsScreen} />
    <InputsStack.Screen name="InputDetail" component={InputDetailScreen} />
  </InputsStack.Navigator>
);

// Graph Stack
const GraphStackNavigator = () => (
  <GraphStack.Navigator screenOptions={{ headerShown: false }}>
    <GraphStack.Screen name="GraphHome" component={GraphScreen} />
    <GraphStack.Screen name="GraphDetail" component={GraphDetailScreen} />
  </GraphStack.Navigator>
);

// Temporary placeholders
const LayoutScreen = () => null;
const LayoutDetailScreen = () => null;

const InputsScreen = () => null;
const InputDetailScreen = () => null;

const GraphScreen = () => null;
const GraphDetailScreen = () => null;

// Bottom Tabs
const BottomTabNavigator = () => {
  const { colors } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'UI':
              return (
                <FontAwesomeIcon icon={faShapes} color={color} size={size} />
              );
            case 'Layout':
              return (
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  color={color}
                  size={size}
                />
              );
            case 'Inputs':
              return (
                <FontAwesomeIcon icon={faSliders} color={color} size={size} />
              );
            case 'Graph':
              return (
                <FontAwesomeIcon icon={faChartLine} color={color} size={size} />
              );
          }
        },
      })}
    >
      <Tab.Screen
        name="UI"
        component={UIStackNavigator}
        options={{ title: 'UI Components' }}
      />

      <Tab.Screen
        name="Layout"
        component={LayoutStackNavigator}
        options={{ title: 'Layout' }}
      />

      <Tab.Screen
        name="Inputs"
        component={InputsStackNavigator}
        options={{ title: 'Input Elements' }}
      />

      <Tab.Screen
        name="Graph"
        component={GraphStackNavigator}
        options={{ title: 'Graph' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
