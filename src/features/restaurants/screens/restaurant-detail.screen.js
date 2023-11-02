import { useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

const { Accordion, Icon, Item } = List;

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Accordion
          title='Breakfast'
          left={(props) => <Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <Item title='Eggs Benedict' />
          <Item title='Classic Breakfast' />
        </Accordion>
        <Accordion
          title='Lunch'
          left={(props) => <Icon {...props} icon='hamburger' />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <Item title='Burger w/ Fries' />
          <Item title='Steak Sandwich' />
          <Item title='Mushroom Soup' />
        </Accordion>
        <Accordion
          title='Dinner'
          left={(props) => <Icon {...props} icon='food-variant' />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <Item title='Spaghetti Bolognese' />
          <Item title='Veal Cutlet w/ Chicken Mushroom Rotini' />
          <Item title='Steak Frites' />
        </Accordion>
        <Accordion
          title='Drinks'
          left={(props) => <Icon {...props} icon='cup' />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <Item title='Coffee' />
          <Item title='Tea' />
          <Item title='Modelo' />
          <Item title='Coke' />
          <Item title='Fanta' />
        </Accordion>
      </ScrollView>
    </SafeArea>
  );
};
