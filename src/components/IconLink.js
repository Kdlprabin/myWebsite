function LinkIcon(props) {
  return (
    <>
      <a
        href={props.link}
        className="nodecor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className= {props.icon}
          viewBox="0 0 16 16"
        >
          <path d={props.path} />
        </svg>
      </a>
      <span>{props.name}</span>
    </>
  );
}
export default LinkIcon;
