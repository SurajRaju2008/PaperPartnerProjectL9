import * as React from 'react';
import { View } from 'react-native';
import { Button, Divider, Menu, PaperProvider } from 'react-native-paper';
import { Icon } from 'react-native-screens';

type propsType = {
    title: string;
    icon?: Icon;
}


const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'blue',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Delivery" />
          <Divider/>
          <Menu.Item onPress={() => {}} title="Pick-up" />
          <Divider/>
          <Menu.Item onPress={() => {}} title="Add to Menu" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;