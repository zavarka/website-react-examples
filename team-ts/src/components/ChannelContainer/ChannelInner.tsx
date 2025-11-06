import {
  MessageInput,
  MessageList,
  Thread,
  Window
} from 'stream-chat-react';

import { TeamChannelHeader } from '../TeamChannelHeader/TeamChannelHeader';
import { ThreadMessageInput } from '../TeamMessageInput/TeamMessageInput';

import './styles/index.scss';

export const ChannelInner = () => {

  return (
    <>
      <Window>
        <TeamChannelHeader />
        <MessageList disableQuotedMessages={true} />
        <MessageInput minRows={1} maxRows={8} />
      </Window>
      <Thread additionalMessageInputProps={{ maxRows: 8, minRows: 1, Input: ThreadMessageInput }} />
    </>
  );
};
