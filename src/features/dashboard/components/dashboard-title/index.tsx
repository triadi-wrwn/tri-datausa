const DashboardTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="my-10 text-center">
      <h1 className="text-4xl text-slate-600 font-bold mb-2">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};
export default DashboardTitle;
