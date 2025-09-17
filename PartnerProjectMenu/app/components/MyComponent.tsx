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
      <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}
          anchorPosition={'bottom'}>
          <Menu.Item onPress={() => {}} title="Fried Chicken" />
          <Divider/>
          <Menu.Item onPress={() => {}} title="Fries" />
          <Divider/>
          <Menu.Item onPress={() => {}} title="Lemonade" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;