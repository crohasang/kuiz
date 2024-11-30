import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../components/bottomNavigation/config';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = NAV_ITEMS.find((item) => item.path === location.pathname)?.id || 'HOME';

  const handleTabChange = (tabId: string) => {
    const targetItem = NAV_ITEMS.find((item) => item.id === tabId);

    if (targetItem) {
      navigate(targetItem.path);
    }
  };

  return {
    navigate,
    activeTab,
    handleTabChange,
  };
};
