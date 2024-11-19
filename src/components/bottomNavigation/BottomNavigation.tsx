import { NavigationContainer } from './styles';
import { NavItem } from './NavItem';
import { NAV_ITEMS } from './config';
import { useNavigation } from '../../hooks/useNavigation';

const BottomNavigation = () => {
  const { activeTab, handleTabChange } = useNavigation();

  return (
    <NavigationContainer>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          isActive={activeTab === item.id}
          onClick={() => handleTabChange(item.id)}
        />
      ))}
    </NavigationContainer>
  );
};

export default BottomNavigation;