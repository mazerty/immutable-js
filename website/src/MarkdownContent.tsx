'use client';

import { memo, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  contents: string;
  className?: string;
};

export const MarkdownContent = memo<Props>(function MarkdownContent({
  contents,
  className,
}) {
  const router = useRouter();

  const handleClick = (event: MouseEvent) => {
    const link = event.target as HTMLAnchorElement;
    if (link.tagName === 'A' && link.target !== '_blank') {
      event.preventDefault();
      router.push(link.href);
    }
  };

  return (
    <div
      className={'markdown ' + (className || '')}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  );
});
