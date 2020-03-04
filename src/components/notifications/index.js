import React from 'react';

import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Badge, Scroll, NotificationList, Notification } from './styles';

import api from '../../services/api';

function Notifications() {
  const [visible, setVisible] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      console.log(response.data)

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }))

      setNotifications(data);
    }

    loadNotifications();
  }, [])

  const hasUnread = React.useMemo(() => !!notifications.find(notification => notification.read === false), [notifications])

  function handleToggleVisible() {
    setVisible(!visible)
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    console.log(id)

    setNotifications(
      notifications.map(notification => console.log(notification._id) === id ? { ...notification, read: true } : notification)
    )
  }

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={handleToggleVisible}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => {
            return (
              <Notification key={notification._id} unread={!notification.read}>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button type="button" onClick={() => handleMarkAsRead(notification._id)}>marcar como lida</button>
                )}
              </Notification>
            )
          })}
        </Scroll>
      </NotificationList>
    </Container>
  )
}

export default Notifications;
