'use client';
import { ComponentProps } from 'react';
import { Image } from './Image';

type AvatarImageProps = Partial<
  ComponentProps<typeof Image> & {
    showBorder?: boolean;
  }
>;

export function NextAvatar({
  src,
  showBorder,
  alt = '',
  style,
  ...props
}: AvatarImageProps) {

  return (
    <Image
      width="2"
      height="20"
      {...props}
      {...(showBorder
        ? {
            border: '2px',
            borderColor:  'navy.700',
          }
        : {})}
      alt={alt}
      objectFit={'fill'}
      src={src}
      style={{ ...style, borderRadius: '50%' }}
    />
  );
}

