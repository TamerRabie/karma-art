import {IAppLink} from '../proto/IAppLink';

export const AdminLinks: IAppLink[] = [
  {id: 0, name: 'Dashboard', icon: 'home', isActive: true},
  {id: 1, name: 'Clients & Users', icon: 'people', isActive: false},
  {id: 2, name: 'Categories & Products', icon: 'camera', isActive: false},
  {id: 3, name: 'Orders', icon: 'local_shipping', isActive: false},
  {id: 4, name: 'Notifications', icon: 'notifications_none', isActive: false},
  {id: 5, name: 'Messages', icon: 'chat', isActive: false},
  {id: 6, name: 'Emails', icon: 'mail_outline', isActive: false},
  {id: 7, name: 'Application Settings', icon: 'settings', isActive: false},
  {id: 8, name: 'Karma Home', icon: 'airplay', isActive: false},
];
