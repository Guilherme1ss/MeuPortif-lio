import React, { FC, ReactElement } from 'react';
import { Item, Icon, Text } from './style';

interface ItemContactProps {
  IconFa: FC;
  LinkContact: string;
}

const ItemContact: FC<ItemContactProps> = ({ IconFa, LinkContact }): ReactElement => {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
        {LinkContact}
      </Text>
    </Item>
  );
}

export default ItemContact;