import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
  return (
    <C.Container>
      ...    
    </C.Container>
  );
}