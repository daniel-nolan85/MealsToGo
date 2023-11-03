import { useState, useContext } from 'react';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Text } from '../../../components/typography/text.component';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('daniel@email.com');
  const [password, setPassword] = useState('test123');

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label='E-mail'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size='large' />
        <AuthInput
          label='Password'
          value={password}
          textContentType='password'
          secureTextEntry
          autoCapitalize='none'
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <ErrorContainer>
            <Spacer size='large' />
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size='large' />
        {!isLoading ? (
          <AuthButton
            icon='lock-open-outline'
            mode='contained'
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color='lightblue' />
        )}
        <Spacer size='large' />
        <AuthButton mode='contained' onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
