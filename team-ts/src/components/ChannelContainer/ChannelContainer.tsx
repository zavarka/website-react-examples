import { Channel, SimpleReactionsList } from 'stream-chat-react';

import { ChannelInner } from './ChannelInner';
import { EmptyChannel } from '../EmptyChannel/EmptyChannel';
import { TeamMessageInput } from '../TeamMessageInput/TeamMessageInput';
import { ThreadHeader } from '../TeamChannelHeader/ThreadHeader';
import { TeamMessage } from '../TeamMessage/TeamMessage';

import data from '@emoji-mart/data';
import { init, SearchIndex } from 'emoji-mart';

const LoadingIndicator = () => null;

init({ data });

export const ChannelContainer = () => {
  return (
    <div className='channel__container'>
      <Channel
        EmptyStateIndicator={EmptyChannel}
        LoadingIndicator={LoadingIndicator}
        Input={TeamMessageInput}
        Message={TeamMessage}
        ReactionsList={SimpleReactionsList}
        ThreadHeader={ThreadHeader}
        emojiSearchIndex={SearchIndex}
      >
        <ChannelInner />
      </Channel>
    </div>
  );
};
