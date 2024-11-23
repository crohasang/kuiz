import { FunctionComponent, SVGProps } from "react";

export interface NavItemProps {
    isActive: boolean;
}

export interface IconProps {
    size?: number;
    color?: string;
}

export interface NavItem {
    id: string;
    label: string;
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    path: string;
}