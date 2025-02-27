import { Text, View } from 'react-native'
import React from 'react'

type SpacerProps = {
    size?: number;
    horizontal?: boolean;
};

//yalnızca boiluk oluşturma sorumluluğu olan özel bir bileşendir

const Spacer = ({ size, horizontal }: SpacerProps) => {
    return (
        <View
            style={{
                height: horizontal ? undefined : size,
                width: !horizontal ? undefined : size,
            }}
        >
        </View>
    );
};

export default Spacer;

