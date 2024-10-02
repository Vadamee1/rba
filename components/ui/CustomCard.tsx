import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

export default function CustomCard({ body, header, footer }: Props) {
  return (
    <Card>
      {header && <CardHeader>{header}</CardHeader>}
      {body && <CardBody>{body}</CardBody>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
