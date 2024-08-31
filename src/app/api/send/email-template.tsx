interface Props {
  name: string
  email: string
  subject: string
  message: string
}

const EmailTemplate: React.FC<Readonly<Props>> = ({
  name,
  email,
  subject,
  message
}) => {
  return (
    <div>
      <h1>Thank you for your message, {name}!</h1>
      <p>We will get back to you as soon as possible.</p>
      <p>Your email: {email}</p>
      <p>Your subject: {subject}</p>
      <p>Your message: {message}</p>
    </div>
  )
}

export default EmailTemplate
