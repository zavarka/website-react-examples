import clsx from 'clsx';
import { useCallback } from 'react';
import { ChannelPreviewUIComponentProps, useChatContext } from 'stream-chat-react';

import { TeamChannelPreview } from './TeamChannelPreview';

import { useWorkspaceController } from '../../context/WorkspaceController';

import './styles/index.scss';

type TeamChannelPreviewProps = ChannelPreviewUIComponentProps & {
  type: string;
};

export const ChannelPreview = ({ channel }: TeamChannelPreviewProps) => {
  const { channel: activeChannel, setActiveChannel } = useChatContext();
  const { displayWorkspace } = useWorkspaceController();

  const handleClick = useCallback(() => {
    displayWorkspace('Chat');
    if (setActiveChannel) {
      setActiveChannel(channel);
    }
  }, [channel, displayWorkspace, setActiveChannel]);

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
