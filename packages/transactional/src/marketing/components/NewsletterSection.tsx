import { Heading, Img, Section, Text } from "@react-email/components";
import { featureSection, heading, image as imageStyle, text } from "../styles";

type Props = {
  title: string;
  children: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
};
export const NewsletterSection = ({ title, image, children }: Props) => (
  <Section style={featureSection}>
    <Heading style={heading}>{title}</Heading>
    <Text style={text}>{children}</Text>
    {image && <Img src={image.src} alt={image.alt} style={imageStyle} />}
  </Section>
);
