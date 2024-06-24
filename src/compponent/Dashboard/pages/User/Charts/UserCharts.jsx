import { LineChart } from "@mui/x-charts/LineChart";
const UserCharts = () => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
    <h1>Reviews</h1>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
       
        
        height={300}
      />
    </div>
  );
};

export default UserCharts;
