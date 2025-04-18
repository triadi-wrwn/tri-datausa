import DashboardFilter from './components/dashboard-filter';
import DashboardTitle from './components/dashboard-title';
import LineChart from './components/linechart';
import PieChart from './components/piechart';
import useDashboard from './dashboard.hooks';

const Dashboard = () => {
  const {
    title = '',
    subtitle = '',
    pieData,
    lineData,
    applyFilter,
  } = useDashboard();

  return (
    <div className="p-6">
      <DashboardTitle title={title} subtitle={subtitle} />
      <DashboardFilter onApply={applyFilter} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LineChart data={lineData} title="Population per year" />
        <PieChart data={pieData} title="Population per year" />
      </div>
    </div>
  );
};

export default Dashboard;
