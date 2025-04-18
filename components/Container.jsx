function Container({ children, classNames }) {
  return (
    <div
      className={`flex items-center justify-center h-[14rem] ${
        classNames ? classNames : ""
      }`}
    >
      <div className="text-center">{children}</div>
    </div>
  );
}
export default Container;
