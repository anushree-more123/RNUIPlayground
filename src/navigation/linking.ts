import { LinkingOptions } from '@react-navigation/native';

import {
    RootStackParamList,
} from './types';

export const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['rnuiplayground://'],

    config: {
        screens: {
            MainTabs: {
                path: '',
                screens: {
                    UI: {
                        path: '',
                        screens: {
                            Home: '',
                            Buttons: 'buttons',
                            ButtonDetail: 'buttons/:variant',
                        },
                    },
                    Layout: {
                        path: 'layout',
                        screens: {
                            LayoutHome: '',
                        },
                    },
                    Inputs: {
                        path: 'inputs',
                        screens: {
                            InputsHome: '',
                        },
                    },
                    Graph: {
                        path: 'graph',
                        screens: {
                            GraphHome: '',
                        },
                    },
                },
            },
        },
    },
};