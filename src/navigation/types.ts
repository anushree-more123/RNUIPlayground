
import { NavigatorScreenParams } from '@react-navigation/native';

export type UIStackParamList = {
    Home: undefined;
    Buttons: undefined;
    ButtonDetail: {
        variant: string;
    };
    Cards: undefined;
    Badges: undefined;
};

export type LayoutStackParamList = {
    LayoutHome: undefined;
    LayoutDetail: {
        component: string;
    };
};

export type InputsStackParamList = {
    InputsHome: undefined;
    InputDetail: {
        component: string;
    };
};


export type GraphStackParamList = {
    GraphHome: undefined;
    ProgressBar: undefined;
    DualProgressBar: undefined;
    CircularProgressChart: undefined;
};


export type RootTabParamList = {
    UI: NavigatorScreenParams<UIStackParamList>;
    Layout: NavigatorScreenParams<LayoutStackParamList>;
    Inputs: NavigatorScreenParams<InputsStackParamList>;
    Graph: NavigatorScreenParams<GraphStackParamList>;
};

export type RootStackParamList = {
    MainTabs: NavigatorScreenParams<RootTabParamList> | undefined;
};
