function DisplayComponent(props) {
  const hour = () => {
    if (props.time.m === 0) return "";
    return (
      <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
    );
  };
  return (
    <div>
      {hour()}
      &nbsp;&nbsp;
      <span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
      &nbsp;:&nbsp;
      <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
      &nbsp;:&nbsp;
      <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
    </div>
  );
}

export default DisplayComponent;
