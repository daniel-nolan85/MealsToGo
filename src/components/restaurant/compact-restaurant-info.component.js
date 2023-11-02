import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';
import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

const Image = isAndroid ? CompactWebView : CompactImage;

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant='caption' numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
