import { NavItem as NavItemType } from './types';
import { NavItemButton, IconWrapper, Label } from './styles';

interface NavItemComponentProps {
  item: NavItemType;
  isActive: boolean;
  onClick: () => void;
}

export const NavItem = ({ item, isActive, onClick }: NavItemComponentProps) => {
    const Icon = item.icon;
    
    return (
        <NavItemButton isActive = {isActive} onClick={onClick}>
            <IconWrapper>
                <Icon size={24} color={isActive ? '#BA6C25' : '#28292C'} />
            </IconWrapper>
            <Label>{item.label}</Label>
        </NavItemButton>
    )
}