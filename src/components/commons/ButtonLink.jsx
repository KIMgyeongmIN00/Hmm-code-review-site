import Button from './Button';
import { Link } from 'react-router-dom';

export default function ButtonLink({ children, ...props }) {
  return (
    <Button as={Link} {...props}>
      {children}
    </Button>
  );
}
