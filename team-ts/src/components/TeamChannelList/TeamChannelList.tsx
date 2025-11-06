import React, { PropsWithChildren } from 'react';



import clsx from 'clsx';
import type { ChannelListMessengerProps } from 'stream-chat-react';

import './styles/index.scss';

export type TeamChannelListProps = ChannelListMessengerProps & {
  type: string;
};

const ChannelList = (props: PropsWithChildren<TeamChannelListProps>) => {
  const { children, error = false, loading, type } = props;


  if (error) {
    return type === 'ccm_public' ? (
      <div className='team-channel-list'>
        <p className='team-channel-list__message'>
          Connection error, please wait a moment and try again.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className='team-channel-list'>
        <p className='team-channel-list__message loading'>
          Channels loading....
        </p>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'team-channel-list',
        `team-channel-list--group'}`,
      )}
    >
      <div className='team-channel-list__header'>
        <p className='team-channel-list__header__title'>
          {type === 'ccm_public' && 'CCM Public'}
          {type === 'ccm_community' && 'CCM Community'}
        </p>
      </div>
      {children}
    </div>
  );
};

export const TeamChannelList = React.memo(ChannelList);
