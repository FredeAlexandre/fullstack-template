import { render } from "@react-email/components";
import nodemailer from "nodemailer";

import chalk from "chalk";

if (!process.env.SMTP_HOST) {
  console.error(chalk.red("Please provide SMTP_HOST env variable"));
  console.error(chalk.blue(`SMTP_HOST=""\nSMTP_USER=""\nSMTP_PASS=""`));
  process.exit(1);
}

if (!process.env.SMTP_USER) {
  console.error(chalk.red("Please provide SMTP_HOST env variable"));
  console.error(chalk.blue(`SMTP_HOST=""\nSMTP_USER=""\nSMTP_PASS=""`));
  process.exit(1);
}

if (!process.env.SMTP_PASS) {
  console.error(chalk.red("Please provide SMTP_HOST env variable"));
  console.error(chalk.blue(`SMTP_HOST=""\nSMTP_USER=""\nSMTP_PASS=""`));
  process.exit(1);
}

if (process.argv.length !== 3) {
  console.error(chalk.red("Missing email to send email to !"));
  console.error(chalk.blue("pnpm email:check <email>"));
  console.error("Example: pnpm email:check michel@uwu.com");
  process.exit(1);
}

async function main() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const to = process.argv[2];

  console.log("Rendering email...");
  // const emailHtml = await render(<StripeWelcomeEmail />);

  const options = {
    from: process.env.SMTP_USER,
    to,
    subject: "hello world from nodejs",
    html: "Hello World from NodeJS",
  };

  console.log(`Sending Email to ${to}...`);
  await transporter.sendMail(options);
  console.log(chalk.green("Email sent!"));
}

console.error(
  "The check need to be reviewed because zenenv.cloud got spam listed and no example emails was written already",
);
process.exit(1);

main().then().catch(console.error);
