import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color: string = score > 75 ? 'green' : score > 65 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>
      {score}
    </Badge>
  );
};

export default CriticScore;