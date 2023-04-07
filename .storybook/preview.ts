import type {Preview} from '@storybook/react';
// @ts-ignore
import {reactIntl} from './reactIntl';

const preview: Preview = {
    globals: {
        locale: 'en',
        locales: {
            en: {title: 'English', left: '🇺🇸', right: 'EN'},
            fr: {title: 'French', left: '🇫🇷', right: 'FR'},
            ja: {title: '日本語', left: '🇯🇵', right: 'JA'},
        },
    },
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        backgrounds: {
            default: 'light',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        reactIntl,
    },
};

export default preview;
