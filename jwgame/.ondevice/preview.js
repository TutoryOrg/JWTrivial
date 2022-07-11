import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
export const decorators = [withBackgrounds];
export const parameters = {
    backgrounds: [
        {name: 'default', value: '#A3ABFF', default: true},
        {name: 'white', value: '#FFFFFF'},
        {name: 'warm', value: 'hotpink'},
        {name: 'cool', value: 'deepskyblue'},
    ],
};
