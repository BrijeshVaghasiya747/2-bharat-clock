let CurrentTime = () => {
  let time = new Date();

  return (
    <p className="lead">
          this the current time: {time.toLocaleDateString()} -{""}
          {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
