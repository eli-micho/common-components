/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CalendarToday,
  Contacts,
  Dashboard,
  DonutSmall,
  HomeWork,
  Settings,
  SettingsBackupRestoreRounded,
} from '@mui/icons-material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Box } from '@mui/material';
import React, { useContext, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from '@storybook/react';
import dayjs from 'dayjs';
import { BrowserRouter } from 'react-router-dom';
import { Licenses } from 'teto-client-api';
import {
  ActionBar,
  DateRangeSelector,
  PageWrapper,
  SidebarMenu,
} from '../components';
import TetoContainer from '../components/TetoContainer/TetoContainer';
import {
  AppearanceProvider,
  AuthContext,
  NavContext,
  SettingsContext,
} from '../contexts';
import { defaultDateRange } from '../helpers';
import BasicTable from './dataTableStoryHelper';

interface Argument {
  navOpen: boolean;
  app: 'administrator';
}
export default {
  component: PageWrapper,
  title: 'Themes/Styles',
  argTypes: {
    navOpen: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    app: {
      options: ['timetracker', 'administrator'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const inactiveMenu = [
  { title: 'Accounting', leftIcon: <Contacts />, route: () => {} },
  { title: 'Administration', leftIcon: <HomeWork />, route: () => {} },
  { title: 'Utilities', leftIcon: <DonutSmall />, route: () => {} },
];

// eslint-disable-next-line no-unused-vars
const selected = (menuItem: any) => {};
const footerMenu = {
  title: 'Settings',
  leftIcon: <Settings />,
  route: () => {},
};
const activeMenu = [
  {
    title: 'Dashboard',
    hidden: true,
    leftIcon: <Dashboard />,
    route: () => {},
    isActive: true,
  },
  { title: 'Timesheets', leftIcon: <CalendarToday />, route: () => {} },
];

const rightMenuItems = [
  {
    title: 'Add Hours',
    icon: <AddCircleOutlineRoundedIcon />,
    onclick: () => {},
  },
  {
    title: 'Confirm',
    icon: <SettingsBackupRestoreRounded />,
    /* confirm: {
      type: 'okCancel',
      title: 'Title',
      content:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores necessitatibus quisquam magni quia, earum, natus itaque eius quaerat alias, pariatur et impedit. Iste unde quidem ad labore beatae neque.',
    }, */
    onclick: () => {},
  },
  {
    title: 'Configure',
    icon: <SettingsRoundedIcon />,
    onclick: () => {},
  },
];

export const Default = (args: Argument) => {
  const { app } = args;

  const settingsContext = useContext(SettingsContext);

  const [navOpen, setNavOpen] = useState(false);
  const [queryDateRange, setQueryDateRange] = useState({
    start: dayjs(
      defaultDateRange(settingsContext.settings.startDayOfWeek).start,
    ),
    end: dayjs(defaultDateRange(settingsContext.settings.startDayOfWeek).end),
  });

  return (
    <AppearanceProvider>
      <AuthContext.Provider
        value={{
          sessionTimeout: false,
          appVersion: '0.0.0.0',
          authenticated: true,
          isLoaded: true,
          canApprove: () => true,
          persistenceMode: () => 'none',
          login: () => Promise.resolve(),
          logout: () => Promise.resolve(),
          testAuthentication: () => Promise.resolve({} as any),
          changePassword: () => Promise.resolve({} as any),
          hasAllPermissions: () => true,
          hasAnyPermission: () => true,
          hasLicense: () => true,
          hasPermission: () => true,
          hasAnyLicense: () => true,
          getUserLicensesList: () => ['TotalETOProfessional'],
          hasEnterpriseLicense: () => true,
          hasProfessionalLicense: () => true,
          hasReadOnlyLicense: () => true,
          user: {
            email: 'test@test.com',
            firstName: 'admin',
            lastName: 'teto',
            permissions: [],
            id: -1,
            license: Licenses.TotalETOProfessional,
            isAdmin: true,
            isApprover: true,
            otherPrivileges: [],
          },
          disableClockIn: false
        }}
      >
        <NavContext.Provider
          value={{
            navOpen,
            setNav: () => setNavOpen(!navOpen),
            toggleNav: () => setNavOpen(!navOpen),
          }}
        >
          <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
              <SidebarMenu
                app={app}
                groupedMenus={[activeMenu, inactiveMenu]}
                onRouteSelected={selected}
                footer={footerMenu}
                data-testid="sidemenu"
              />
              <PageWrapper
                data-testid="nav"
                pageTitle="Testing Page"
                rightMenuItems={[]}
              >
                <TetoContainer>
                  <ActionBar
                    leftChildren={(
                      <DateRangeSelector
                        dates={queryDateRange}
                        onDateChange={(e) => setQueryDateRange(e)}
                      />
                    )}
                    rightChildren={rightMenuItems}
                  />
                  {BasicTable()}
                </TetoContainer>
              </PageWrapper>
            </Box>
          </BrowserRouter>
        </NavContext.Provider>
      </AuthContext.Provider>
    </AppearanceProvider>
  );
};
