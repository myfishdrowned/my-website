import { Helmet, HelmetData } from "react-helmet-async";

const helmetData = new HelmetData({});

interface HeadProps {
  desc?: string;
}

export default function Head({ desc = "" }: HeadProps) {
  return (
    <Helmet
      helmetData={helmetData}
      title="Saif-Ur Rahman | IAM Engineer"
    >
      <meta name="description" content={desc} />
    </Helmet>
  );
}
