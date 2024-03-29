import { SideMenu } from "../components/SideMenu";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="bg-gray-400/100 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-full sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl h-s ">
          <SideMenu />
          <Table />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
