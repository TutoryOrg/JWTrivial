import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';

export const decorators = [withBackgrounds];
export const parameters = {
    backgrounds: [
        {name: 'default', value: '#FFFFFF', default: true},
        {name: 'purple', value: '#A3ABFF'},
        {name: 'warm', value: 'hotpink'},
        {name: 'cool', value: 'deepskyblue'},
    ],
};
