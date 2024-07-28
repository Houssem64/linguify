// components/NotificationComponent.tsx
import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface Notification {
    id: number;
    message: string;
    type: 'info' | 'success' | 'warning';
    time: string;
}

const NotificationComponent: React.FC = () => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    // Mock notifications data with added type and time
    const notifications: Notification[] = [
        { id: 1, message: "New job matching your skills!", type: 'info', time: '5m ago' },
        { id: 2, message: "Your proposal was accepted", type: 'success', time: '1h ago' },
        { id: 3, message: "Payment received for completed job", type: 'success', time: '2h ago' },
    ];

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    const getTypeColor = (type: Notification['type']) => {
        switch (type) {
            case 'info': return 'bg-blue-100 text-blue-800';
            case 'success': return 'bg-green-100 text-green-800';
            case 'warning': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="relative z-10 transition">
            <button
                onClick={toggleNotifications}
                className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 relative"
            >
                <NotificationsIcon className="h-6 w-6" />
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {notifications.length}
                    </span>
                )}
            </button>
            {isNotificationsOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                    <div className="px-4 py-3">
                        <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                    </div>
                    <div className="py-1 max-h-60 overflow-y-auto">
                        {notifications.map((notification) => (
                            <a
                                key={notification.id}
                                href="#"
                                className="flex items-center px-4 py-3 hover:bg-gray-50 transition ease-in-out duration-150"
                            >
                                <div className={`flex-shrink-0 w-2 h-2 rounded-full mr-3 ${getTypeColor(notification.type)}`}></div>
                                <div className="flex-grow">
                                    <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                                    <p className="text-xs text-gray-500">{notification.time}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    {notifications.length === 0 && (
                        <div className="px-4 py-3 text-sm text-gray-500">
                            No new notifications
                        </div>
                    )}
                </div>
            )
            }
        </div >
    );
};

export default NotificationComponent;