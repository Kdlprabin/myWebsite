function InfoBar(props) {
  return (
    <div className="mx-3 bg-primary p-2 d-inline rounded fw-bold h5 text-white">
      {props.message}
    </div>
  );
}

export default InfoBar;
