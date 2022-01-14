/*
 * Copyright (c) Ubuntu Care 2022. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  constructor(private accessChecker: NbAccessChecker) {}

  getMenu(): Observable<NbMenuItem[]> {
    const adminMenu: NbMenuItem[] = [
      {
        title: 'ADMIN MENU',
        group: true,
      }, // TODO: hiding dashboard - not needed atm
      // {
      //   title: 'Dashboard',
      //   icon: 'pie-chart-outline',
      //   link: '/pages/dashboard',
      //   home: true,
      //   children: undefined,
      // },
      {
        title: 'Users',
        icon: 'people-outline',
        link: '/pages/users/list',
        children: undefined,
      }

    ];

    const requestsMenu: NbMenuItem[] = [
      {
        title: 'Requests',
        icon: 'car-outline',
        link: '/pages/orders/list',
        children: undefined,
      },
    ];

    const messagesMenu: NbMenuItem[] = [
      {
        title: 'Messages',
        icon: 'email-outline',
        link: '/pages/layout/infinite-list',
        children: undefined,
      },
    ];

    const menu: NbMenuItem[] = [
      {
        title: 'NON-ADMIN MENU',
        group: true,
      },
      {
        title: 'Messages',
        icon: 'email-outline',
        link: '/pages/layout/infinite-list',
        children: undefined,
      },
      {
        title: 'Instructions',
        icon: 'layout-outline',
        children: [
          {
            title: 'Steps',
            link: '/pages/layout/stepper',
          },
          {
            title: 'List of actions',
            link: '/pages/layout/list',
          },
          {
            title: 'Documentation',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Summaries',
            link: '/pages/layout/accordion',
          },
          {
            title: 'Troubleshooting',
            pathMatch: 'prefix',
            link: '/pages/layout/tabs',
          },
        ],
      },
      {
        title: 'Forms',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Form Inputs',
            link: '/pages/forms/inputs',
          },
          {
            title: 'Form Layouts',
            link: '/pages/forms/layouts',
          },
          {
            title: 'Buttons',
            link: '/pages/forms/buttons',
          },
          {
            title: 'Calendar',
            link: '/pages/forms/datepicker',
          },
        ],
      },
      {
        title: 'Facilities',
        icon: 'keypad-outline',
        link: '/pages/ui-features',
        children: [
          {
            title: 'Clinics',
            link: '/pages/ui-features/grid',
          },
          {
            title: 'Hospitals',
            link: '/pages/ui-features/icons',
          },
          {
            title: 'Dentistries',
            link: '/pages/ui-features/typography',
          },
          {
            title: 'Pharmacies',
            link: '/pages/ui-features/search-fields',
          },
        ],
      },

      {
        title: 'Maps',
        icon: 'map-outline',
        children: [
          {
            title: 'Clinics',
            link: '/pages/maps/gmaps',
          },
          {
            title: 'Ambulances',
            link: '/pages/maps/leaflet',
          },
          {
            title: 'Pharmacies',
            link: '/pages/maps/bubble',
          },
          {
            title: 'Search Maps',
            link: '/pages/maps/searchmap',
          },
        ],
      },

      {
        title: 'People & Projects',
        icon: 'grid-outline',
        children: [
          {
            title: 'People',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Projects',
            link: '/pages/tables/tree-grid',
          },
        ],
      }
    ];
    const userMenu: NbMenuItem = {
      title: 'Users',
      icon: 'people-outline',
      link: '/pages/users/list',
      children: undefined,
    };
    return this.accessChecker.isGranted('view', 'users')
      .pipe(map(hasAccess => {
        if (hasAccess) {
          return [...adminMenu, ...menu];
        } else {
          return [...menu];
        }
      }));
  }
}
