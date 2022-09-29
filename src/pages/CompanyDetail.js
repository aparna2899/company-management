import axios from 'axios';
import { useState } from 'react';

export default function CompanyDetail(props) {
  const { corporate_identification_number, company_name } =
    props.location.state;

  const cin = corporate_identification_number;
  const name = company_name;
  const [list, setList] = useState([]);

  const handleClick = () => {
    const postData = async () => {
      try {
        const res = await axios({
          method: 'POST',
          url: 'http://localhost:4000/add-company',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({ cin, name }),
        });
      } catch (error) {
        console.log(error);
      }
    };
    postData();

    const getList = async () => {
      try {
        const res = await axios.get('http://localhost:4000/company-list');
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getList();
  };
  console.log(list);
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-20 mb-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                      >
                        Cin
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        name
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr key={cin}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {cin}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {name}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center">
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              onClick={handleClick}
            >
              Add Company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
