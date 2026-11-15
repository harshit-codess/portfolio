export default function PhoneHeading({ num, id, children }) {
  return (
    <h2 className="p-heading" id={id}>
      <span>{num}</span>
      {children}
    </h2>
  );
}
