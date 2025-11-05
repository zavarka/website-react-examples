import { ChannelList } from 'stream-chat-react';

import {
    EmptyDMChannelListIndicator,
    EmptyGroupChannelListIndicator
} from "./EmptyChannelListIndicator";
import { ChannelSearch } from '../ChannelSearch/ChannelSearch';
import { TeamChannelList } from '../TeamChannelList/TeamChannelList';
import { ChannelPreview } from '../ChannelPreview/ChannelPreview';

import { CompanyLogo } from './icons';

import type { Channel, ChannelFilters } from 'stream-chat';
import { ChannelSort } from 'stream-chat';




  const filters: ChannelFilters[] = [
    { type: 'team' },
    { type: 'messaging' },
    { type: 'ccm_public' },
    { type: 'ccm_community' },
    { type: 'ccm_member_sharing' },
  ];
const options = { state: true, watch: true, presence: true, limit: 3 };
const sort: ChannelSort = { last_message_at: -1, updated_at: -1 };

const FakeCompanySelectionBar = () => (
  <div className='sidebar__company-selection-bar'>
    <div className='sidebar__company-badge'>
        <CompanyLogo />
    </div>
  </div>
);

const customChannelTeamFilter = (channels: Channel[]) => {
  return channels.filter((channel) => channel.type === 'team');
};

const customChannelMessagingFilter = (channels: Channel[]) => {
  return channels.filter((channel) => channel.type === 'messaging');
};

const customCcmPublicChannelFilter = (channels: Channel[]) => {
  return channels.filter((channel) => channel.type === 'ccm_public');
};

const TeamChannelsList = () => (
  <ChannelList
    channelRenderFilterFn={customChannelTeamFilter}
    filters={filters[0]}
    options={options}
    sort={sort}
    EmptyStateIndicator={EmptyGroupChannelListIndicator}
    List={(listProps) => (
      <TeamChannelList
        {...listProps}
        type='team'
      />
    )}
    Preview={(previewProps) => (
      <ChannelPreview
        {...previewProps}
        type='team'
      />
    )}
  />
);

const CcmPublicChannelsList = () => (
  <ChannelList
    channelRenderFilterFn={customCcmPublicChannelFilter}
    filters={filters[2]}
    options={options}
    sort={sort}
    setActiveChannelOnMount={false}
    EmptyStateIndicator={EmptyDMChannelListIndicator}
    List={(listProps) => (
      <TeamChannelList
        {...listProps}
        type='ccm_public'
      />
    )}
    Preview={(previewProps) => (
      <ChannelPreview
        {...previewProps}
        type='ccm_public'
      />
    )}
  />
)
const MessagingChannelsList = () => (
  <ChannelList
    channelRenderFilterFn={customChannelMessagingFilter}
    filters={filters[1]}
    options={options}
    sort={sort}
    setActiveChannelOnMount={false}
    EmptyStateIndicator={EmptyDMChannelListIndicator}
    List={(listProps) => (
      <TeamChannelList
        {...listProps}
        type='messaging'
      />
    )}
    Preview={(previewProps) => (
      <ChannelPreview
        {...previewProps}
        type='messaging'
      />
    )}
  />
)

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <FakeCompanySelectionBar />
      <div className='channel-list-bar'>
        <div className='channel-list-bar__header'>
          <p className='channel-list-bar__header__text'>Worksly</p>
        </div>
        <CcmPublicChannelsList />
        <ChannelSearch />
        <TeamChannelsList/>
        <MessagingChannelsList/>
      </div>
    </div>
  );
};
