import { useContext } from 'react';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon='human' backgroundColor='#2182bd' />
        <Spacer position='top' size='large' />
        <Text variant='caption'>{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          left={(props) => <List.Icon {...props} color='black' icon='heart' />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title='Logout'
          left={(props) => <List.Icon {...props} color='black' icon='door' />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
