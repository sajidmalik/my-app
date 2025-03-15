function Message() {
  const name = "Sajid Malik";

  if (name) return `Hello! ${name} in AWS Elastic beanstalk`;

  return `Hello! from AWS Elastic beanstalk`;
}

export default Message;
