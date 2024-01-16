import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';

const backIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const navigateBack = (navigation) => {
    navigation.goBack();
};

export const BackAction = (navigation) => (
    <TopNavigationAction icon={backIcon} onPress={() => navigateBack(navigation)}/>
);