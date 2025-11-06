import clsx from 'clsx';
import { useCallback } from 'react';
import { ChannelPreviewUIComponentProps, useChatContext } from 'stream-chat-react';

import { TeamChannelPreview } from './TeamChannelPreview';

import './styles/index.scss';

type TeamChannelPreviewProps = ChannelPreviewUIComponentProps & {
  type: string;
};

export const ChannelPreview = ({ channel }: TeamChannelPreviewProps) => {
  const { channel: activeChannel, setActiveChannel } = useChatContext();

  const handleClick = useCallback(() => {
    if (setActiveChannel) {
      setActiveChannel(channel);
    }
  }, [channel, setActiveChannel]);

  return (
    <button
      className={clsx('channel-preview', { selected: channel?.id === activeChannel?.id })}
      onClick={handleClick}
    >
     <TeamChannelPreview
          name={channel?.data?.name || (channel?.data?.id as string) || 'random'}
        />
    </button>
  );
};
