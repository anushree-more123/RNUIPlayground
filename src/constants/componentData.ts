import {
    faShapes,
    faCreditCard,
    faTag,
    faWindowMaximize,
    faRectangleList,
    faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';

export const componentCategories = [
    {
        id: 'buttons',
        title: 'Buttons',
        description: 'Different button styles and actions',
        icon: faShapes,
        componentCount: 8,
    },
    {
        id: 'cards',
        title: 'Cards',
        description: 'Reusable content containers',
        icon: faCreditCard,
        componentCount: 6,
    },
    {
        id: 'badges',
        title: 'Badges',
        description: 'Labels, tags and status indicators',
        icon: faTag,
        componentCount: 5,
    },
    {
        id: 'modals',
        title: 'Modals',
        description: 'Dialogs and popup components',
        icon: faWindowMaximize,
        componentCount: 4,
    },
    {
        id: 'lists',
        title: 'Lists',
        description: 'List items and separators',
        icon: faRectangleList,
        componentCount: 5,
    },
    {
        id: 'selection',
        title: 'Selection',
        description: 'Checkboxes and selection controls',
        icon: faSquareCheck,
        componentCount: 6,
    },
];