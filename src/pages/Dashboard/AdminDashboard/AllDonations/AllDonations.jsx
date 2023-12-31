import SectionTitle from "../../../../components/sectionTitle/sectionTitle";
import useDonationCamp from "../../../../hooks/useDonationCamp";
import AllDonationTable from "./AllDonationTable";

const AllDonations = () => {
    const [donationCamps, isLoading, refetch] = useDonationCamp()


    return (
        <div>
            <div className="text-center">
                <SectionTitle subHeading={'donation campaigns'} heading={"All Donation Campaigns"} darkMode={true} />
            </div>



            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-8">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                Serial
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pet Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Maximun Donation Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Donation Progress
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Campaign Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            donationCamps?.map((camp, idx) => <AllDonationTable key={camp._id} donationCamp={camp} serial={idx} />)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllDonations;