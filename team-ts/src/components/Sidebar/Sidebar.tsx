import { ChannelList } from 'stream-chat-react';

import { ChannelPreview } from '../ChannelPreview/ChannelPreview';
import { TeamChannelList } from '../TeamChannelList/TeamChannelList';
import {
  EmptyDMChannelListIndicator
} from './EmptyChannelListIndicator';

import { CompanyLogo } from './icons';

import type { Channel, ChannelFilters } from 'stream-chat';
import { ChannelSort } from 'stream-chat';

import './styles/index.scss';

const filters: ChannelFilters[] = [
  { type: 'ccm_public' },
  { type: 'ccm_community' },

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



const customCcmPublicChannelFilter = (channels: Channel[]) => {
  return channels.filter((channel) => channel.type === 'ccm_public');
};

const customCcmCommunityChannelFilter = (channels: Channel[]) => {
  return channels.filter((channel) => channel.type === 'ccm_community');
};


const CcmPublicChannelsList = () => (
  <ChannelList
    channelRenderFilterFn={customCcmPublicChannelFilter}
    filters={filters[0]}
    options={options}
    sort={sort}
    setActiveChannelOnMount={false}
    EmptyStateIndicator={EmptyDMChannelListIndicator}
    List={(listProps) => <TeamChannelList {...listProps} type='ccm_public' />}
    Preview={(previewProps) => <ChannelPreview {...previewProps} type='ccm_public' />}
  />
);

const CcmCommunityChannelsList = () => (
  <ChannelList
    channelRenderFilterFn={customCcmCommunityChannelFilter}
    filters={filters[1]}
    options={options}
    sort={sort}
    setActiveChannelOnMount={false}
    EmptyStateIndicator={EmptyDMChannelListIndicator}
    List={(listProps) => <TeamChannelList {...listProps} type='ccm_community' />}
    Preview={(previewProps) => <ChannelPreview {...previewProps} type='ccm_community' />}
  />
);

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <FakeCompanySelectionBar />
      <div className='channel-list-bar'>
        <div className='channel-list-bar__header'>
          <p className='channel-list-bar__header__text'>Prayerstream</p>
        </div>
        <CcmPublicChannelsList />
        <CcmCommunityChannelsList />
      </div>
    </div>
  );
};
