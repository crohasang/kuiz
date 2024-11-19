import { useState } from "react";

export const useNavigation = () => {
    const [activeTab, setActiveTab] = useState('HOME');

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };

    return {
        activeTab,
        handleTabChange
    };
};