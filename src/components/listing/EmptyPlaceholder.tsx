import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

export type EmptyPlaceholderProps = {
  title?: string
  content?: string
}

export const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> = (props) => {
  return (
    <Placeholder
      Animation={Fade}
    >
      <PlaceholderLine width={80} />
      <PlaceholderLine />
      <PlaceholderLine width={30} />
    </Placeholder>
  )
}
