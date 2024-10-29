declare module 'nodemailer' {
  import { Transporter } from 'nodemailer';
  const nodemailer: {
    createTransport: (...args: any[]) => Transporter;
  };
  export default nodemailer;
}

