import * as React from 'react';
import { View } from 'react-native';
import { Button, Divider, Menu, PaperProvider } from 'react-native-paper';
import { Icon } from 'react-native-screens';
import Options from './Options';

type propsType = {
    title: string;
    icon?: Icon;
    style: string;
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
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item leadingIcon ="food-drumstick" onPress={() => {}} title="Fried Chicken" />
            <Options/>
          <Divider/>
          <Menu.Item leadingIcon ="french-fries" onPress={() => {}} title="Fries" />
            <Options/>
          <Divider/>
          <Menu.Item leadingIcon ="food-fork-drink" onPress={() => {}} title="Lemonade" />
            <Options/>
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;