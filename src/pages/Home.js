import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState([]);
  const [company, setCompany] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          'https://api.data.gov.in/resource/bffbc5a2-0c7b-4c7a-be82-6da25438dd07?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json'
        );
        setData(response.data.records);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const handleChange = (e) => {
    setInput('');
    const { value } = e.target;
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].company_name.startsWith(value.toUpperCase(), 0)) {
        arr.push(data[i].company_name);
        setResponse(arr);
      }
      if (value === '') {
        setResponse([]);
      }
    }
  };

  const handleSelect = (e) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].company_name === e.target.textContent) {
        setCompany(data[i]);
      }
    }
    setInput(e.target.textContent);
    setResponse([]);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl mt-24">
        <div>
          <div className="my-6">
            <input
              type="text"
              name="companyname"
              id="companyname"
              value={input}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter company name"
              onChange={(e) => handleChange(e)}
            />
            <ul className="bg-white shadow-lg px-4  ring-1 ring-black ring-opacity-5">
              {response.map((name) => (
                <li
                  onClick={(e) => handleSelect(e)}
                  className="py-2 cursor-pointer"
                  key={name}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={{
              pathname: `/${input}`,
              state: company,
            }}
          >
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium leading-4 text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
