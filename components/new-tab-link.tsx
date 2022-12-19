export const NewTabLink: React.FC<any> = ({ children, href, ...other }) => {
  return (
    <a
      {...other}
      target="_blank"
      rel="noopener noreferrer"
      href={`${href}?ref=javascriptdevs.com`}
    >
      {children}
    </a>
  );
};

export default NewTabLink;
