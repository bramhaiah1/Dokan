import * as React from 'react';
import { View,Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const MyComponent = () => {
  const [checked, setChecked] = React.useState(false);

  return (
      <View>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      
    />
        <Text style={{marginTop: 5}}> this is checkbox</Text>
</View>
  );
};

export default MyComponent;