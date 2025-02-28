import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VerifyEmailProps {
  userFirstname?: string;
  verificationLink?: string;
}

const baseUrl = process.env.WWW_URL;

const VerifyEmail = ({
  userFirstname,
  verificationLink,
}: VerifyEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verify your email for Acme</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/acme-logo.png`}
            width="40"
            height="40"
            alt="Acme"
          />
          <Section>
            <Text style={text}>Hi {userFirstname},</Text>
            <Text style={text}>
              Thank you for signing up with Acme! To complete your registration, please verify your email address by clicking the button below:
            </Text>
            <Button style={button} href={verificationLink}>
              Verify Email
            </Button>
            <Text style={text}>
              If you didn&apos;t create an account with Acme, you can safely ignore this email.
            </Text>
            <Text style={text}>
              Need help? Visit our <Link style={anchor} href="https://acme.com/help">Help Center</Link> for more information.
            </Text>
            <Text style={text}>Welcome to Acme!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

VerifyEmail.PreviewProps = {
  userFirstname: "John",
  verificationLink: "https://acme.com/verify-email",
} as VerifyEmailProps;

export default VerifyEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};
